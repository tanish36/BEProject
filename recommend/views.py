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
			u = userrecommend6()
			u.problem_id = request.data['problem_id']
			u.email = request.data['email']
			u.status = request.data['status']
			#u.timetaken = request.data['timetaken']
			u.lineofcode = request.data['lineofcode']
			u.save()
			return Response({"message":"information saved"},status=200)
		
	except Exception as ex:
		return Response({"message":str(ex)},status =500)

@api_view(['POST'])
def tag_search(request):
	try:
			u = userrecommend8()
			#u.problem_id = request.data['problem_id']
			u.email = request.data['email']
			u.topicid = request.data['topicid']
			u.save()
			return Response({"message":"information saved"},status=200)
		
	except Exception as ex:
		return Response({"message":str(ex)},status =500)

@api_view(['POST'])
def start_problem(request):
	try:
			u = userrecommend7()
			u.problem_id = request.data['problem_id']
			u.email = request.data['email']
			#u.nooftry = request.data['nooftry']
			u.itime = request.data['itime']
			#u.difficulty = request.data['difficulty']
			u.save()
			return Response({"message":"information saved"},status=200)
		
	except Exception as ex:
		return Response({"message":str(ex)},status =500)

@api_view(['POST'])
def no_of_try(request):
	try:
		zz = userrecommend7.objects.filter(email=request.data['email'],problem_id=request.data['problem_id']).values()
		if len(zz)==0:
			u = userrecommend7()
			u.nooftry = request.data['nooftry']
			u.email = request.data['email']
			u.problem_id = request.data['problem_id']
			u.save()
			return Response({"message":"saved"},status=200)
		else:
			userrecommend7.objects.filter(email=request.data['email'],problem_id=request.data['problem_id']).update(nooftry = int(zz[0]['nooftry'])+1)
			return Response({"message":"updated"},status=200)
	except Exception as ex:
		return Response({"message":str(ex)},status =500)


@api_view(['POST'])
def end_problem(request):
	try:
		zz = userrecommend7.objects.filter(email=request.data['email'],problem_id=request.data['problem_id'])
		userrecommend7.objects.filter(email=request.data['email'],problem_id=request.data['problem_id']).update(ftime = request.data['ftime'])
		return Response({"message":"updated"},status=200)
	except Exception as ex:
		return Response({"message":str(ex)},status =500)


@api_view(['POST'])
def login_start(request):
	try:
		zz = userrecommend9.objects.filter(email=request.data['email'])
		if len(zz)==0:
			u = userrecommend9()
			#u.nooftry = request.data['nooftry']
			u.loginstarttime = request.data['loginstarttime']
			u.save()
			return Response({"message":"saved"},status=200)
		else:
			userrecommend9.objects.filter(email=request.data['email']).update(loginstarttime = request.data['loginstarttime'])
			return Response({"message":"updated"},status=200)
	except Exception as ex:
		return Response({"message":str(ex)},status =500)


@api_view(['POST'])
def login_end(request):
	try:
		zz = userrecommend9.objects.filter(email=request.data['email'])
		userrecommend9.objects.filter(email=request.data['email']).update(loginendtime = request.data['loginendtime'])
		return Response({"message":"saved"},status=200)
	except Exception as ex:
		return Response({"message":str(ex)},status =500)