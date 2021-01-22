from django.contrib import admin
from django.urls import path,include
from . import views 

urlpatterns = [

    path('newuser',views.registerView,name = 'RegisterView'),
    path('login',views.loginView,name = 'loginView'),
    path('getrank',views.get_rank,name = 'getRank'),
    path('update_rank',views.update_rank,name = 'update_rank')
]
