from django.shortcuts import render
from .models import discussion,response
from .serializer import discussionSerializer,newDiscussionSerializer,responseSerializer,newResponseSerializer,TopicSerializer
from django.views.decorators.clickjacking import xframe_options_exempt
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser


@api_view(['GET'])
def getDiscussionTopics(request):
	dis = discussion.objects.all()
	discussion_topics = TopicSerializer(dis, many=True)
	return JsonResponse(discussion_topics.data, safe=False)

@api_view(['GET'])
def getDiscussion(request):
	return Response(discussion.objects.filter(discussionId=request.GET['id']).values())
	#print(Discussion)
	#return JsonResponse(Discussion, safe=False) 

@api_view(['GET'])
def getDiscussionResponses(request):
	return Response(response.objects.filter(discussionId=request.GET['id']).values())
			 

@api_view(['POST'])
def addDiscussion(request):
	try:
		serializer = newDiscussionSerializer(data = request.data)
		if serializer.is_valid():
			u = discussion()
			u.email = request.data['email']
			u.title = request.data['title']
			u.content = request.data['content']
			u.save()
			return Response({"message":"Discussion Saved"},status=200)
		else:
			return Response(serializer.errors, status=400)
	except Exception as ex:
		return Response({"message":ex},status =500)

				 
@api_view(['POST'])
def addDiscussionResponse(request):
	try:
		serializer = newResponseSerializer(data = request.data)
		if serializer.is_valid():
			u = response()
			u.email = request.data['email']
			u.responseid = request.data['responseid']
			u.content = request.data['content']
			u.save()
			return Response({"message":"Response Saved"},status=200)
		else:
			return Response(serializer.errors, status=400)
	except Exception as ex:
		return Response({"message":ex},status =500)

