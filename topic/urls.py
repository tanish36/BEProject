from django.contrib import admin
from django.urls import path,include
from . import views 

urlpatterns = [

    path('getcontent',views.getcontent,name = 'getcontent'),
    path('getcontentid',views.getcontentid,name = 'getcontentid'),
    path('addcontent',views.addcontent,name = 'addcontent')
]
