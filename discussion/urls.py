from django.contrib import admin
from django.urls import path,include
from . import views 

urlpatterns = [

    path('getDiscussionTopics',views.getDiscussionTopics,name = 'getDiscussionTopics'),
    path('getDiscussion',views.getDiscussion,name = 'getDiscussion'),
    path('getDiscussionResponses',views.getDiscussionResponses,name = 'getDiscussionResponses'),
    path('addDiscussion',views.addDiscussion,name = 'addDiscussion'),
    path('addDiscussionResponse',views.addDiscussionResponse,name = 'addDiscussionResponse'),
]
