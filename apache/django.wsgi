import os, sys
path = ‘/var/www/envy/’

if path not in sys.path:
 	sys.path.append(path)

os.environ[‘DJANGO_SETTINGS_MODULE’] = ‘envy.settings’
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()