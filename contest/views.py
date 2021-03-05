from django.shortcuts import render
from .serializer import contestSerializer,cpSerializer,cuSerializer
from .models import contest2,contestproblem,contestuser
from django.views.decorators.clickjacking import xframe_options_exempt
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from problems.models import problem


@api_view(['GET'])
def getcontest(request):
    dd=contest2.objects.all().values()
    return Response(dd,status=200)

@api_view(['GET'])
def getcproblem(request):
    dd=contestproblem.objects.filter(contestid=request.GET['id']).values()
    prl=[]
    for i in dd:
        print(i['problemid'])
        k = problem.objects.filter(problem_id=i['problemid']).values()
        for j in k:
            prl.append(j)

    return Response(prl,status=200)

@api_view(['GET'])
def contestinfo(request):
    try:
        zz = contest2.objects.filter(contestid=request.GET['id']).values()
        return Response(zz,status=200)
    except Exception as ex:
        return Response({"message":str(ex)},status =500)


@api_view(['GET'])
def isregister(request):
    try:
        dd=contestuser.objects.filter(contestid=request.GET['contestid'],email = request.GET['email']).values()
        if len(dd)>0:
            return Response({"message":"User Registered"},status=200)
        else:
            return Response({"message":"User not Registered"},status=200)
    except Exception as ex:
        return Response({"message":str(ex)},status =500)

@api_view(['GET'])
def updatescore(request):
    try:
        dd=contestuser.objects.filter(contestid=request.GET['contestid'],email = request.GET['email']).values()
        newscore = int(request.GET['score'])
        contestuser.objects.filter(contestid=request.GET['contestid'],email = request.GET['email']).update(score=newscore).update(problemid = request.GET['problemid'])
        return Response({"message":"score updated"},status=200)
        
    except Exception as ex:
        return Response({"message":str(ex)},status =500)

@api_view(['GET'])
def getscore(request):
    try:
        dd=contestuser.objects.filter(contestid=request.GET['contestid'],email = request.GET['email']).values()
        score = {}
        for i in dd:
            score[dd[i]['problemid']]=dd[i]['score']
        return Response(score,status=200)
        
    except Exception as ex:
        return Response({"message":str(ex)},status =500)

@api_view(['POST'])
def contestproblempp(request):
    try:
        serializer = cpSerializer(data = request.data)
        if serializer.is_valid():
            u = contestproblem()
            u.contestid = request.data['contestid']
            u.problemid = request.data['problemid']
            u.save()
            return Response({"message":"problem added"},status=200)
        else:
            return Response(serializer.errors, status=400)
    except Exception as ex:
        return Response({"message":str(ex)},status =500)


@api_view(['POST'])
def registerusercontest(request):
    try:
        serializer = cuSerializer(data = request.data)
        if serializer.is_valid():
            u = contestuser()
            u.contestid = request.data['contestid']
            u.email = request.data['email']
            u.save()
            return Response(serializer.data,status=200)
        else:
            return Response(serializer.errors, status=400)
    except Exception as ex:
        return Response({"message":str(ex)},status =500)

@api_view(['POST'])
def addcontest(request):
    try:
        serializer = contestSerializer(data = request.data)
        if serializer.is_valid():
            u = contest2()
            u.duration = request.data['duration']
            u.title = request.data['title']
            u.timestamp = request.data['timestamp']
            u.save()
            k = serializer.data
            k['id']=u.contestid
            #print(k)
            
            return Response(k,status=200)
        else:
            return Response(serializer.errors, status=400)
    except Exception as ex:
        return Response({"message":str(ex)},status =500)