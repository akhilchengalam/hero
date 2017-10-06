from django.contrib.auth import get_user_model, authenticate, login
from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, status, views
from rest_framework.response import Response
from user.serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
   queryset = get_user_model().objects
   serializer_class = UserSerializer


# class LoginView(views.APIView):
#     def post(self, request, format=None):
#         data = json.loads(request.body)
#
#         email = data.get('email', None)
#         password = data.get('password', None)
#
#         account = authenticate(email=email, password=password)
#
#         if account is not None:
#             if account.is_active:
#                 login(request, account)
#
#                 serialized = AccountSerializer(account)
#
#                 return Response(serialized.data)
#             else:
#                 return Response({
#                     'status': 'Unauthorized',
#                     'message': 'This account has been disabled.'
#                 }, status=status.HTTP_401_UNAUTHORIZED)
#         else:
#             return Response({
#                 'status': 'Unauthorized',
#                 'message': 'Username/password combination invalid.'
#             }, status=status.HTTP_401_UNAUTHORIZED)
