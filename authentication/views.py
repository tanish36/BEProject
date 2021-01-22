from django.shortcuts import render
from .models import user
from .serializer import userserializer,loginSerializer
from django.views.decorators.clickjacking import xframe_options_exempt
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

@api_view(['GET'])
def get_rank(request):
	return user.objects.filter(email=request.data['email'])

@api_view(['POST'])
def update_rank(request):
	return user.objects.filter(email=request.data['email']).update(rank=request.data['rank'])


@api_view(['POST'])
def registerView(request):
	#print(request.data,request.method)
	#u = user(email = request.data['email'],password = request.data['password'],firstname = request.data['firstname'],lastname = request.data['lastname'])
	try:
		serializer = userserializer(data = request.data)
		if serializer.is_valid():
			if len(user.objects.filter(email=request.data['email'])) > 0:
				return Response(status=400, data={"msg": "email already in use"})
			u = user()
			u.lastname = request.data['lastname']
			u.password = request.data['password']
			u.email = request.data['email']
			u.firstname = request.data['firstname']
			u.isadmin = request.data['isadmin']
			u.rank = request.data['rank']
			u.save()
			return Response({"message":"User Registration Successfully"},status=200)
		else:
			return Response(serializer.errors, status=400)
	except Exception as ex:
		return Response({"message":ex},status =500)

@api_view(['POST'])
def loginView(request):
	try:
		serializer = loginSerializer(data = request.data)
		if serializer.is_valid():
			u = user.objects.filter(email=request.data['email']).values()
			if len(u) == 0:
				return Response(status=400, data={"msg": "Email Id Not Found"})
			if (u[0]['password']==request.data['password']):
				return Response(status=200,data=u)
			return Response(status=400,data={"msg":"Wrong Password"})
		else:
			return Response(serializer.errors, status=400)
	except Exception as ex:
		return Response({"message":ex},status =500)
			 




