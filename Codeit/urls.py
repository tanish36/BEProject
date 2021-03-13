"""Codeit URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView


urlpatterns = [

    path('', TemplateView.as_view(template_name='index.html')),
    path('Signin', TemplateView.as_view(template_name='index.html')),
    path('Signup', TemplateView.as_view(template_name='index.html')),
    path('Welcome', TemplateView.as_view(template_name='index.html')),
    path('Contest', TemplateView.as_view(template_name='index.html')),
    path('Learn', TemplateView.as_view(template_name='index.html')),
    path('AllProblem', TemplateView.as_view(template_name='index.html')),
    path('Contest', TemplateView.as_view(template_name='index.html')),
    path('AddContent', TemplateView.as_view(template_name='index.html')),
    path('AddContest', TemplateView.as_view(template_name='index.html')),
    path('AddProblem', TemplateView.as_view(template_name='index.html')),
    path('Discuss', TemplateView.as_view(template_name='index.html')),
    path('Homepage', TemplateView.as_view(template_name='index.html')),


    path('admin/', admin.site.urls),
    path('auth/', include('authentication.urls')),
    path('topic/', include('topic.urls')),
    path('problems/', include('problems.urls')),
    path('topic/', include('topic.urls')),
    path('discuss/', include('discussion.urls')),
    path('contest/', include('contest.urls')),
    path('recommend/', include('recommend.urls')),
]
