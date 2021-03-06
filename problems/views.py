from django.shortcuts import render
from .models import *
from .serializer import problemserializer
from django.views.decorators.clickjacking import xframe_options_exempt
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
#4416
@api_view(['GET'])
def getproblems(request):
	dd = problem.objects.all().values()
	return Response(dd)

@api_view(['GET'])
def getproblemsid(request):
	dd = problem.objects.all().filter(problem_id=request.GET['problem_id']).values()
	return Response(dd)

@api_view(['GET'])
def updatenos(request):
	dd = problem.objects.all().filter(problem_id=request.GET['problem_id']).values()
	z = int(dd[0]['problem_noofsubmission'])+1
	problem.objects.all().filter(problem_id=request.GET['problem_id']).update(problem_noofsubmission=z)
	return Response({"message":"updated"},status=200)

@api_view(['POST'])
def problemfeedback(request):
	try:
		#serializer = problemserializer(data = request.data)
		#if serializer.is_valid():
			u = problemfeedback()
			#u.problem_id = request.data['problem_id']
			u.problem_feedback = request.data['problem_feedback']
			u.email = request.data['email']
			u.problem_id = request.data['problem_id']
			u.save()
			#data2 = serializer.data
			#data2['id'] = u.problem_id
			return Response({"message":"feedback saved"},status=200)
		#else:
			#return Response(serializer.errors, status=400)
	except Exception as ex:
		return Response({"message":str(ex)},status =500)

@api_view(['POST'])
def addproblem(request):
	try:
		serializer = problemserializer(data = request.data)
		if serializer.is_valid():
			u = problem()
			#u.problem_id = request.data['problem_id']
			u.problem_name = request.data['problem_name']
			u.problem_statement = request.data['problem_statement']
			u.problem_tags = request.data['problem_tags']
			u.problem_input = request.data['problem_input']
			u.problem_output = request.data['problem_output']
			u.problem_example = request.data['problem_example']
			u.problem_samplecase = request.data['problem_samplecase']
			u.problem_score = request.data['problem_score']
			u.problem_noofsubmission = request.data['problem_noofsubmission']
			u.save()
			data2 = serializer.data
			data2['id'] = u.problem_id
			return Response(data2,status=200)
		else:
			return Response(serializer.errors, status=400)
	except Exception as ex:
		return Response({"message":str(ex)},status =500)