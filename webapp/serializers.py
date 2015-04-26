from rest_framework import serializers

#load django and webapp models
from django.contrib.auth.models import *
from webapp.models import *

class UserSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = User
    fields = ('url','username','email','groups')

class GroupSerializer(serializers.ModelSerializer):
  class Meta:
    model = Group
    fields = ('name','permissions')
    depth = 1;

class PermissionSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Permission
    fields = ('url','name')

# class ContentItemSerializer(serializers.HyperlinkedModelSerializer):
#   class Meta:
#     model = ContentItem
#     fields = ('id','name','itemType','trustLevel','enabled')
