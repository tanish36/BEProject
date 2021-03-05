from django.contrib import admin
from django.urls import path,include
from . import views 

urlpatterns = [

    path('getproblems',views.getproblems,name = 'getproblems'),
    path('getproblemsid',views.getproblemsid,name = 'getproblemsid'),
    path('addproblem',views.addproblem,name = 'addproblem'),
    path('problemfeedback',views.problemfeedback,name = 'problemfeedback'),
    path('updatenos',views.updatenos,name = 'updatenos')
]
