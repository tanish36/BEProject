from django.urls import path
from . import views


urlpatterns = [
    path('login', views.login, name="userPage"),
    path('refresh', views.login, name="refresh"),
    path('contests', views.futureContests, name="contestsTemplates"),
]
