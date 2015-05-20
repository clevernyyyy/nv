# Import models

from django.shortcuts import render
from django.db import models
from django.contrib.auth.models import *
from webapp.models import *

#REST API
from rest_framework import viewsets
from webapp.serializers import *

#Add in the following views beneath your existing views.
#ViewSets for REST API
class UserViewSet(viewsets.ModelViewSet):
  """
  API endpoint that allows users to be viewed or edited.
  """
  queryset = User.objects.all()
  serializer_class = UserSerializer

class GroupViewSet(viewsets.ModelViewSet):
  """
  API endpoint that allows groups to be viewed or edited.
  """
  queryset = Group.objects.all()
  serializer_class = GroupSerializer

class PermissionViewSet(viewsets.ModelViewSet):
  """
  API endpoint that allows permissions to be viewed or edited.
  """
  queryset = Permission.objects.all()
  serializer_class = PermissionSerializer

class LoginViewSet(viewsets.ModelViewSet):
    queryset = Login.objects.all()
    serializer_class = LoginSerializer

     #   code = InviteCode.objects.get(code = inviteCode)

     #   if not code.used :          
     #     user = User.objects.create_user(
     #       first_name = request.POST.get('firstName'),
     #       last_name = request.POST.get('lastName'),
     #       email = request.POST.get('email'),
     #       password = request.POST.get('password'),
     #       username = request.POST.get('username'),
     #       #zipCode = request.POST.get('zipCode')
     #       )
     #     user.is_staff = True
     #     user.is_superuser = True
     #     user.save()
     #     code.used = True
     #     code.save()
     #     return Response({'valid': True, 'user_id': user.id})
     #   return self.send_response(False, 'used')

     # except InviteCode.DoesNotExist:
     #   return self.send_response(False, 'invalid')

# class ContentItemViewSet(viewsets.ModelViewSet):
#   """
#   API endpoint that allows content items to be viewed or edited.
#   """
#   queryset = ContentItem.objects.all()
#   serializer_class = ContentItemSerializer