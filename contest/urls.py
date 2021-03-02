from django.contrib import admin
from django.urls import path,include
from . import views 

urlpatterns = [

    path('contestproblem',views.contestproblempp,name = 'contestproblem'),
    path('getcproblem',views.getcproblem,name = 'getcproblem'),
    path('registerusercontest',views.registerusercontest,name = 'registerusercontest'),
    path('addcontest',views.addcontest,name = 'addcontest'),
    path('getallcontest',views.getcontest,name = 'getcontest'),
    path('isregister',views.isregister,name = 'isregister'),
]