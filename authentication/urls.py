from django.contrib import admin
from django.urls import path,include
from . import views 

urlpatterns = [

    path('newuser',views.registerView,name = 'RegisterView'),
    path('login',views.loginView,name = 'loginView')
]
