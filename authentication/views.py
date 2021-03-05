from django.shortcuts import render
from .models import user
from .serializer import userserializer,loginSerializer
from .models import user, submissions, history
from .serializer import userserializer,loginSerializer, submissionsSerializer, historySerializer
from django.views.decorators.clickjacking import xframe_options_exempt
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

@api_view(['GET'])
def get_rank(request):
	dd = user.objects.filter(email=request.GET.get('email')).values()
	return Response(dd,status=200)

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
				return Response(status=200,data=u[0])
			return Response(status=400,data={"msg":"Wrong Password"})
		else:
			return Response(serializer.errors, status=400)
	except Exception as ex:
		return Response({"message":ex},status =500)
			 


@api_view(['GET'])
def getHistory(request):
	dd = history.objects.filter(email=request.GET['user_id']).values()
	return Response(dd,status=200)

@api_view(['POST'])
def saveHistory(request):
    try:
        serializer = historySerializer(data = request.data)
        if serializer.is_valid():
            u = history()
            u.email = request.data['email']
            u.rank = request.data['rank']
            u.timestamp = request.data['timestamp']
            u.save()
            k = serializer.data
            k['id']=u.id
            
            return Response(k,status=200)
        else:
            return Response(serializer.errors, status=400)
    except Exception as ex:
        return Response({"message":str(ex)},status =500)



from django.db.models import F

@api_view(['GET'])
def getGraph(request):
	print(request.GET['user_id'])
	dd = submissions.objects.filter(email=request.GET['user_id']).values()
	return Response(dd,status=200)

@api_view(['POST'])
def saveGraph(request):
	try:
		serializer = submissionsSerializer(data = request.data)
		if serializer.is_valid():
			u = submissions.objects.filter(email=request.data['email']).values()
			if len(u) == 0:
				h = submissions()
				h.email = request.data['email']
				h.ac = 0
				h.wa = 0
				h.tle = 0
				h.save()
			if ("ac"==request.data['status']):
				dd = submissions.objects.filter(email=request.data['email']).update(ac=F("ac")+1)
				return Response(dd,status=200)
			if ("wa"==request.data['status']):
				dd = submissions.objects.filter(email=request.data['email']).update(wa=F("wa")+1)
				return Response(dd,status=200)
			if ("tle"==request.data['status']):
				dd = submissions.objects.filter(email=request.data['email']).update(tle=F("tle")+1)
				return Response(dd,status=200)
			return Response(status=400,data={"msg":"Wrong Status"})
		else:
			return Response(serializer.errors, status=400)
	except Exception as ex:
		print(ex)
		return Response({"message":str(ex)},status =500)






