from django.urls import path
from . import views


urlpatterns = [
    path('login', views.login, name="userPage"),
    path('contests', views.futureContests, name="contestsTemplates"),
    path('recommend1', views.recommend1, name="recommend1"),
    path('tag_search', views.tag_search, name="tag_search"),
    path('start_problem', views.start_problem, name="start_problem"),
    path('no_of_try', views.no_of_try, name="no_of_try"),
    path('end_problem', views.end_problem, name="end_problem"),
    path('login_start', views.login_start, name="login_start"),
    path('login_end', views.login_end, name="login_end"),
]
