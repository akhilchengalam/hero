from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'username', 'email', 'password', )

    def create(self, request):
        user = User.objects.create(
            first_name=request.get('first_name'),
            last_name=request.get('last_name'),
            username=request.get('username'),
            email=request.get('email'),
            # password1=request.get('password1'),
            # password2=request.get('password2'),
        )
        user.set_password(request.get('password'))
        user.save()

        return user

# class LoginSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#
