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
from pyzipcode import ZipCodeDatabase

zcdb = ZipCodeDatabase()

def RepresentsInt(s):
    try:
        int(s)
        return True
    except ValueError:
        return False

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

def saveDog(dog):
    # prevents duplication
    if len(models.Dog.objects.filter(pet_id=dog['shelterPetId'])) > 0:
        return

    # ends save if no pictures
    if len(dog['photos']) < 6:
        return

    photos = dog['photos']
    profile_photo_url = photos[0]['url']
    # for redis integration
    second_photo = photos[1]['url']
    third_photo = photos[2]['url']
    fourth_photo = photos[3]['url']
    fifth_photo = photos[4]['url']
    sixth_photo = photos[5]['url']
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


    new_dog = models.Dog.create(pet_id, name, sex, age, contact_email, contact_phone, city, zip_code, size, description, profile_photo_url, second_photo, third_photo, fourth_photo, fifth_photo, sixth_photo)
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

def serialize_dogs(dog_ls):
    json_dogs = []

    for dog in dog_ls:
        json_dogs.append(dog.serialize())

    return json_dogs

def index(request):
    all_dogs = models.Dog.objects.order_by('?')[:20]

    return JsonResponse({'dogs': serialize_dogs(all_dogs)})

def search_dogs(request):
    last_offset = 0
    count = 20
    location_info = request.GET.get('location').split(',')
    location = location_info[0]
    if len(location_info) > 1:
        state = location_info[1].strip()



    if not RepresentsInt(location):
        specific_dogs = models.Dog.objects.filter(city=location)
        if len(specific_dogs)>40:
            return
        #using pyzipcode to get zip codes from city because external api search by city is not working.
        all_zips = zcdb.find_zip(city=location) if len(location_info)==1 else zcdb.find_zip(city=location, state=state)
        zip_codes = [z.zip for j, z in enumerate(all_zips) if j < 10]
        for z in zip_codes:
            initial_queried_dogs = api.pet_find(output='full', location=z, animal='dog', offset=last_offset, lastOffset=last_offset)
            for i, dog in enumerate(initial_queried_dogs):
                last_offset+=count
                saveDog(dog)
                # dogs.append(dog)
                if i == 10:
                    break

        specific_dogs = models.Dog.objects.order_by('?').filter(city=location)[:50]

    else:
        specific_dogs = models.Dog.objects.filter(city=location)
        if len(specific_dogs)>40:
            return

        initial_queried_dogs = api.pet_find(output='full', location=location, animal='dog', offset=last_offset, lastOffset=last_offset)
        # using enumerate because the "count" parameter does not appear to work consistently
        for i, dog in enumerate(initial_queried_dogs):
            last_offset+=count
            saveDog(dog)
            # dogs.append(dog)
            if i == 20:
                break
        specific_dogs = models.Dog.objects.order_by('?').filter(zip_code=location)[:50]


    # if RepresentsInt(location):
    # else:

    json_dogs = []
    for dog in specific_dogs:
        json_dogs.append(dog.serialize())

    return JsonResponse({'dogs': json_dogs})
