from django.shortcuts import render, redirect, get_object_or_404
from kocoonBackendApp.models import UserProfileInfo, Room
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse, reverse_lazy
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer, RoomSerializer

def default(request):
    return HttpResponse('Index')

@api_view(['GET'])
def UserDetail(request,slug):
    # return HttpResponse('Hello')
    try:
        # print(slug)
        current_user=get_object_or_404(User,username=slug)
        UserInfo = UserProfileInfo.objects.filter(user=current_user)
        serializer = UserSerializer(UserInfo, many=True)
        return Response(serializer.data)
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET'])
def UsersFromSchoolDetail(request,slug):
    try:
        UserInfo = UserProfileInfo.objects.filter(school=slug)
        serializer = UserSerializer(UserInfo, many=True)
        return Response(serializer.data)
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)
# Create your views here.
