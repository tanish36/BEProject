from django.shortcuts import render
from .models import topic
from .serializer import topicserializer
from django.views.decorators.clickjacking import xframe_options_exempt
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

@api_view(['GET'])
def getcontent(request):
    dd = topic.objects.all().values()
    return Response(dd)

@api_view(['GET'])
def getcontentid(request):
    dd = topic.objects.all().filter(topic_id=request.GET['topic_id']).values()
    return Response(dd)


@api_view(['POST'])
def addcontent(request):
	try:
		serializer = topicserializer(data = request.data)
		if serializer.is_valid():
			u = topic()
			#u.topic_id = request.data['topic_id']
			u.topic_module = request.data['topic_module']
			u.topic_name = request.data['topic_name']
			u.topic_vlink = request.data['topic_vlink']
			u.topic_content = request.data['topic_content']
			u.save()
			return Response({"message":"Topic Added Successfully"},status=200)
		else:
			return Response(serializer.errors, status=400)
	except Exception as ex:
		return Response({"message":ex},status =500)