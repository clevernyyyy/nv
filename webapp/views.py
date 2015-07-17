# Import models
from django.shortcuts import render
from django.db import models
from django.contrib.auth.models import *
from webapp.models import *
from django.contrib.auth import *

#REST API
from rest_framework import viewsets
from rest_framework.views import APIView
from webapp.serializers import *
from rest_framework.response import Response
from rest_framework.permissions import *

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
class Session(APIView):
    permission_classes = (AllowAny,)
    error_messages = {
        'invalid': "Invalid username or password",
        'disabled': "Sorry, this account is suspended",
    }

    def send_error_response(self, message_key):
        data = {
            'success': False,
            'message': self.error_messages[message_key],
            'user_id': None,
        }
        return Response(data)

    def get(self, request, *args, **kwargs):
        # Get the current user
        if request.user.is_authenticated():
            return Response({'user_id': request.user.id})
        return Response({'user_id': None})

    def post(self, request, *args, **kwargs):
        # Login
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return Response({'success': True, 'user_id': user.id})
            return self.send_error_response('disabled')
        return self.send_error_response('invalid')

    def delete(self, request, *args, **kwargs):
        # Logout
        logout(request)
        return Response(status=status.HTTP_204_NO_CONTENT)
