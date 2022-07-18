from django.shortcuts import render, redirect, get_object_or_404
from kocoonBackendApp.models import UserProfileInfo, Room, Meeting
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse, reverse_lazy
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.contrib.sites.shortcuts import get_current_site
from rest_framework import status, generics
from rest_framework.decorators import api_view
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from .serializers import UserSerializer, RoomSerializer, RegisterSerializer, LoginSerializer, MeetingSerializer

def default(request):
    return HttpResponse('Index')

class MeetingsListAPIView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self,request):
        profile = get_object_or_404(UserProfileInfo,user=request.user)
        meetings =  Meeting.objects.filter(user=current_user)
        serializer = MeetingSerializer(meetings, many=True)
        return Response(serializer.data)
    # def get(self,request):
    #     print(request.user)
    #     profile = get_object_or_404(UserProfileInfo,user=request.user)
    #     return Response(profile.meetings)


class RegisterUserAPIView(generics.CreateAPIView):
    permission_classes = [AllowAny,]
    serializer_class = RegisterSerializer
class LoginAPIView(APIView):
    permission_classes = [AllowAny,]
    def post(self, request, format=None):
        serializer = LoginSerializer(data=self.request.data,
            context={ 'request': self.request })
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        # print(user)
        return Response(status=status.HTTP_202_ACCEPTED)

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
