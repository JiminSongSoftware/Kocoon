from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import UserProfileInfo, Room
from rest_framework.response import Response
from rest_framework import status
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfileInfo
        fields = '__all__'
class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(label="Username",write_only=True)
    password = serializers.CharField(
        label="Password",style={'input_type': 'password'},
        trim_whitespace=False,
        write_only=True
        )
    def validate(self, attrs):
        # Take username and password from request
        username = attrs.get('username')
        password = attrs.get('password')
        if username and password:
            # Try to authenticate the user using Django auth framework.
            user = authenticate(request=self.context.get('request'),
                                username=username, password=password)
            if not user:
                # If we don't have a regular user, raise a ValidationError
                msg = 'Access denied: wrong username or password.'
                raise serializers.ValidationError(msg, code='authorization')
        else:
            msg = 'Both "username" and "password" are required.'
            raise serializers.ValidationError(msg, code='authorization')
        attrs['user'] = user
        return attrs

class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    class Meta:
        model = User
        fields = ('username', 'password', 'password2','email', 'first_name', 'last_name')
        extra_kwargs = {'first_name': {'required': True},'last_name': {'required': True}}
    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs
    def create(self, validated_data):
        user = User.objects.create(
        username=validated_data['username'],
        email=validated_data['email'],
        first_name=validated_data['first_name'],
        last_name=validated_data['last_name']
    )
        user.set_password(validated_data['password'])
        user.save()
        profile_user = user
        user_profile = UserProfileInfo.objects.create(user=profile_user)
        user_profile.user = profile_user
        user_profile.save()
        return user
