"""
WSGI config for app project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/howto/deployment/wsgi/
"""

import os, sys

# add the root directory path into the sys.path
sys.path.append('../')

# add the virtualenv site-packages path to the sys.path
sys.path.append('/Library/Frameworks/Python.framework/Versions/2.7/bin/virtualenv/Lib/site-packages')

# pointing to the project settings
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "app.settings")

from django.core.wsgi import get_wsgi_application
from whitenoise.django import DjangoWhiteNoise


application = get_wsgi_application()
application = DjangoWhiteNoise(application)
