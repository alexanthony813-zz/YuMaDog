from django.views.generic.base import TemplateView
from django.shortcuts import render
from django.http import HttpResponse, HttpRequest, HttpResponseRedirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
import urllib2
import models
import re
import json
from django.http import JsonResponse
import petfinder
from . import settings
import config


# Instantiate the client with your credentials.
api = petfinder.PetFinderClient(api_key=config.API_KEY, api_secret=config.API_SECRET)

def login(request):
    # next = request.GET.get('next', '/home/')
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)

        if user is not None:
            login(request, user)
            return HttpResponseRedirect('/')
        else:
            HttpResponseRedirect(settings.LOGIN_URL)

    return render(request, 'dogs/login.html', {'redirect_to': '/'})

def user_logout(request):
    logout(request)
    return HttpResponseRedirect(settings.LOGIN_URL)

def saveDog(dog, zip_to_search):
    # prevents duplication
    if len(models.Dog.objects.filter(pet_id=dog['shelterPetId']))>0:
        return

    # ends save if no pictures
    if len(dog['photos']) == 0:
        return

    photos = dog['photos']
    profile_photo_url = photos[0]['url']
    pet_id = dog['shelterPetId']
    name = dog['name']
    age = dog['age']
    description = dog['description']

    sex = dog['sex']
    if sex == 'M':
        sex = 'Male'
    else:
        sex = 'Female'

    size = dog['size']
    if size == 'S':
        size = 'Small'
    elif size =='L':
        size = 'Large'
    else:
        size = 'Medium'

    contact_email = dog['contact']['email']
    contact_phone = dog['contact']['phone']
    city = dog['contact']['city']
    zip_code = dog['contact']['zip']
    notes = dog['options']
    breeds = dog['breeds']


    new_dog = models.Dog.create(pet_id, name, sex, age, contact_email, contact_phone, city, zip_code, size, description, profile_photo_url)
    new_dog.save()

    # get new dog primary id
    new_dog = models.Dog.objects.filter(pet_id=pet_id)[0]
    new_dog_id = new_dog.pk


    # many to many
    for breed in breeds:
        if breed == 'unavailable':
            breed = 'Mixed'
        # check to see if breed exists first
        new_breed = models.Breed.create(breed)
        new_breed.save()
        # get new breed primary id
        new_breed = models.Breed.objects.filter(breed=breed)[0]
        new_breed_id = new_breed.pk

        new_dog.breeds.add(new_breed_id)
        new_dog.save()

    # these two are one to many. can be queried later from join with foreign key from respective tables
    for note in notes:
        new_note = models.Notes.create(note, new_dog)
        new_note.save()

    for photo in photos:
        new_photo = models.Photos.create(photo['url'], new_dog)
        new_photo.save()

    new_dog.save()


def index(request):
    all_dogs = models.Dog.objects.filter(zip_code='94103')
    print len(all_dogs)
    return render(request, 'home.html', {'dogs': all_dogs})

def search_dogs(request):
    last_offset = 0
    count = 20
    zip_to_search = request.GET.get('zip_code')
    dogs = []

    # using enumerate because the "count" parameter does not appear to work consistently
    for i, dog in enumerate(api.pet_find(output='full',count=count, location=zip_to_search, animal='dog', offset=last_offset, lastOffset=last_offset)):
        last_offset+=count
        dogs.append(dog)
        if i == 40:
            break

    for dog in dogs:
        saveDog(dog, zip_to_search)

    # print str(zip_to_search)
    specific_dogs = models.Dog.objects.filter(zip_code=zip_to_search)
    print 'dogs!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
    print specific_dogs
    # all_dogs = models.Dog.objects.all()
    json_dogs = []

    for dog in specific_dogs:
        json_dogs.append(dog.serialize())

    return JsonResponse({'dogs': json_dogs})
