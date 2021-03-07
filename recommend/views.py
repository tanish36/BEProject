from django.shortcuts import render
from .extraMethods import userDetails, convertUnixTime, getTags, contestDetails
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import *

# Create your views here.

@api_view(['GET'])
def login(request):
    userInfo = False
    userInfo = userDetails(request.GET['username'], False)


    dt_object = convertUnixTime(userInfo['lastOnlineTimeSeconds'])

    weakTags,weaktagsvurl,tagscurl = getTags(userInfo['handle'], userInfo['rating'])

    return Response({'user': userInfo, 'lastOnline': dt_object, 'tags': weakTags,'vurls':weaktagsvurl,'curls':tagscurl},status=201)

@api_view(['GET'])
def futureContests(request):
    contestsList = contestDetails()
    return Response({'contests': contestsList},status=200)


@api_view(['POST'])
def recommend1(request):
	try:
			u = userrecommend()
			u.problem_id = request.data['problem_id']
			u.email = request.data['email']
			u.status = request.data['status']
			u.timetaken = request.data['timetaken']
			u.lineofcode = request.data['lineofcode']
			u.save()
			return Response({"message":"information saved"},status=200)
		
	except Exception as ex:
		return Response({"message":str(ex)},status =500)

@api_view(['POST'])
def recommend3(request):
	try:
			u = userrecommend3()
			#u.problem_id = request.data['problem_id']
			u.email = request.data['email']
			u.timespent = request.data['timespent']
			u.tagsserach = request.data['tagsserach']
			u.tsc = request.data['tsc']
			u.tsp = request.data['tsp']
			u.save()
			return Response({"message":"information saved"},status=200)
		
	except Exception as ex:
		return Response({"message":str(ex)},status =500)

@api_view(['POST'])
def recommend2(request):
	try:
			u = userrecommend2()
			u.problem_id = request.data['problem_id']
			u.email = request.data['email']
			u.nooftry = request.data['nooftry']
			u.rating = request.data['rating']
			u.difficulty = request.data['difficulty']
			u.save()
			return Response({"message":"information saved"},status=200)
		
	except Exception as ex:
		return Response({"message":str(ex)},status =500)