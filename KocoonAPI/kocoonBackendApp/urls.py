from django.urls import path
from kocoonBackendApp import views
app_name="kocooonBackendApp"

urlpatterns = [
    path('',views.default,name="index"),
    path('kocoonBackend/v0/register',views.RegisterUserAPIView.as_view(), name = 'Register'),
    path('kocoonBackend/v0/login',views.LoginAPIView.as_view(), name='Login'),
    path('kocoonBackend/v0/userInfo/<slug:slug>',views.UserDetail, name='UserDetail'),
    path('kocoonBackend/v0/usersBySchool/<slug:slug>',views.UsersFromSchoolDetail, name='UsersBySchool'),
    path('kocoonBackend/v0/meetings',views.MeetingsListAPIView.as_view(), name='get_meetings'),
]