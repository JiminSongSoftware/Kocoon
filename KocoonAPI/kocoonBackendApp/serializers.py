from rest_framework import serializers
from .models import UserProfileInfo, Room

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfileInfo
        fields = '__all__'
class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'