from django import forms
from django.contrib.auth.models import User
from firstApp.models import UserProfileInfo

class UserProfileInfoForm(forms.ModelForm):
    class Meta():
        model = UserProfileInfo
        fields = ('profile_pic','user_type')
