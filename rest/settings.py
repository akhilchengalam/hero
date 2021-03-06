"""
Django settings for heroes project.
Generated by 'django-admin startproject' using Django 1.11.5.
For more information on this file, see
https://docs.djangoproject.com/en/1.11/topics/settings/
For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.11/ref/settings/
"""
import os
# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.11/howto/deployment/checklist/
# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '8hxi!b53gyjfv6hb+o$1&5)2y%$gcukm^h@t!q56!6s-h)9e2('

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['restheroes.herokuapp.com','localhost']
# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework.authtoken',
    'rest_auth',
    'heroes',
    'user',
    'corsheaders',
    'rest_auth.registration',
    'django.contrib.sites',
    'allauth',
    'allauth.account',
    'whitenoise'
]


MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'corsheaders.middleware.CorsPostCsrfMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
]

ROOT_URLCONF = 'rest.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
WSGI_APPLICATION = 'rest.wsgi.application'
# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql_psycopg2',
#         'NAME': 'hero',
#         'USER': 'ak',
#         'PASSWORD': 'password',
#         'HOST': 'localhost',
#         'PORT': '',
#     }
# }
DATABASES = {
   'default': {
       'ENGINE': 'django.db.backends.postgresql_psycopg2',
       'NAME': 'd69nghuetb4klf',
       'USER': 'kywhtmrmjjldnw',
       'PASSWORD': '7a15569e12ae0ffe9e99e3eb64b35b459da718aa7c4f8121c69dbb7d20c50099',
       'HOST': 'ec2-54-235-153-124.compute-1.amazonaws.com',
       'PORT': '5432',
       # 'URI': 'postgres://kywhtmrmjjldnw:7a15569e12ae0ffe9e99e3eb64b35b459da718aa7c4f8121c69dbb7d20c50099@ec2-54-235-153-124.compute-1.amazonaws.com:5432/d69nghuetb4klf'
   }
}

# Password validation
# https://docs.djangoproject.com/en/1.11/ref/settings/#auth-password-validators
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# REST_FRAMEWORK = {
#     # Use Django's standard `django.contrib.auth` permissions,
#     # or allow read-only access for unauthenticated users.
#
#
# }

# Internationalization
# https://docs.djangoproject.com/en/1.11/topics/i18n/
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True
ACCOUNT_LOGOUT_ON_GET = True
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/

SITE_ID = 1

CORS_ORIGIN_WHITELIST = (
'restheroes.herokuapp.com','localhost:8000',
)

# CORS_ORIGIN_ALLOW_ALL = True
EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'thereportersnews@gmail.com'
EMAIL_HOST_PASSWORD = 'reporternews'
EMAIL_PORT = 587
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.TokenAuthentication',
    ),
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
    )
 }


ACCOUNT_EMAIL_VERIFICATION = 'none'
ANGULAR_APP_DIR = os.path.join(BASE_DIR, 'dist')
STATICFILES_DIRS = [
    os.path.join(ANGULAR_APP_DIR),
]
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
CORS_ALLOW_CREDENTIALS=True
STATICFILES_STORAGE = 'whitenoise.django.GzipManifestStaticFilesStorage'
CSRF_TRUSTED_ORIGINS = (
    'restheroes.herokuapp.com','localhost',
)
CORS_REPLACE_HTTPS_REFERER = True
