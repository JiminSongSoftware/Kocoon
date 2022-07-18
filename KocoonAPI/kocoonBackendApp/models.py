from django.db import models
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from django.utils import timezone
import string
# Create your models here.
class UserProfileInfo(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    #additional
    USERTYPE = models.TextChoices('FIELDTYPE','Professor Student Tutor')
    profile_pic = models.ImageField(upload_to='profile_pics',blank=True)
    user_type = models.CharField(choices=USERTYPE.choices, max_length=10, default="User")
    school = models.CharField(max_length=200, default="")
    profile_created = models.DateTimeField(default=timezone.now)
    def get_user(self,username):
        return get_object_or_404(User,username)
    def get_type(self):
        return self.user.user_type
    def __str__(self):
        return self.user.username
    def get_meetings(self):
        return self.meetings
class Room(models.Model):
    room_name = models.CharField(max_length=200,default="")

class Meeting(models.Model):
    name = models.CharField(max_length=100, default="New Meeting")
    zoom_link = models.URLField(max_length=200)
    MEETING_TYPE_OPTIONS = models.TextChoices('FIELDTYPE','Private Group OH')
    meeting_type = models.CharField(choices=MEETING_TYPE_OPTIONS.choices, max_length=10, default="Private")
    meeting_host = models.CharField(max_length=50, default="")
    meeting_time = models.DateTimeField()
    MEETING_STATUS_OPTIONS = models.TextChoices('FIELDTYPE','Passed Upcoming Occurring')
    meeting_status = models.CharField(choices=MEETING_STATUS_OPTIONS.choices, max_length=10, default="Upcoming")
    meeting_created = models.DateTimeField(default=timezone.now)
    topics_discussed = models.CharField(max_length=200, default="")
    notes = models.CharField(max_length=400,default="")
    creator = models.ForeignKey(UserProfileInfo, on_delete=models.CASCADE, null=True)
    attendees = models.ManyToManyField(UserProfileInfo, related_name='meetings')
    
    def __str__(self):
        return self.name
    def get_creator(self):
        return self.creator
    