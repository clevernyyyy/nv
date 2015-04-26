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

# class ContentItemViewSet(viewsets.ModelViewSet):
#   """
#   API endpoint that allows content items to be viewed or edited.
#   """
#   queryset = ContentItem.objects.all()
#   serializer_class = ContentItemSerializer
