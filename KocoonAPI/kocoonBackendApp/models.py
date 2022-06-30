from django.db import models
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
import string
# Create your models here.
class UserProfileInfo(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    #additional
    USERTYPE = models.TextChoices('FIELDTYPE','Professor Student Tutor')
    profile_pic = models.ImageField(upload_to='profile_pics',blank=True)
    user_type = models.CharField(choices=USERTYPE.choices, max_length=10, default="User")
    school = models.CharField(max_length=200, default="")
    def get_user(self,username):
        return get_object_or_404(User,username)
    def get_type(self):
        return self.user.user_type
    def __str__(self):
        return self.user.username
class Room(models.Model):
    room_name = models.CharField(max_length=200,default="")