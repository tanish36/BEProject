from django.shortcuts import render
from .extraMethods import userDetails, convertUnixTime, getTags, contestDetails
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

# Create your views here.

@api_view(['GET'])
def login(request):
    userInfo = False
    userInfo = userDetails(request.GET['username'], False)


    dt_object = convertUnixTime(userInfo['lastOnlineTimeSeconds'])

    weakTags = getTags(userInfo['handle'], userInfo['rating'])

    return Response({'user': userInfo, 'lastOnline': dt_object, 'tags': weakTags},status=201)

@api_view(['GET'])
def futureContests(request):
    contestsList = contestDetails()
    return Response({'contests': contestsList},status=200)
