from django.urls import path
from . import views


urlpatterns = [
    path('login', views.login, name="userPage"),
    path('contests', views.futureContests, name="contestsTemplates"),
    path('recommend1', views.recommend1, name="recommend1"),
    path('recommend3', views.recommend3, name="recommend3"),
    path('recommend2', views.recommend2, name="recommend2"),
]
