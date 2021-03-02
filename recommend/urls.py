from django.urls import path
from . import views


urlpatterns = [
    path('login', views.login, name="userPage"),
    path('contests', views.futureContests, name="contestsTemplates"),
]
