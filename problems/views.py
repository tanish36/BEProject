from django.shortcuts import render
from .models import problem
from .serializer import problemserializer
from django.views.decorators.clickjacking import xframe_options_exempt
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

@api_view(['GET'])
def getproblems(request):
	dd = problem.objects.all().values()
	return Response(dd)

@api_view(['GET'])
def getproblemsid(request):
	dd = problem.objects.all().filter(problem_id=request.data['problem_id'])
	return Response(dd)


@api_view(['POST'])
def addproblem(request):
	try:
		serializer = problemserializer(data = request.data)
		if serializer.is_valid():
			u = problem()
			u.problem_id = request.data['problem_id']
			u.problem_name = request.data['problem_name']
			u.problem_statement = request.data['problem_statement']
			u.problem_tags = request.data['problem_tags']
			u.problem_io = request.data['problem_io']
			u.problem_con = request.data['problem_con']
			u.save()
			return Response({"message":"Problem Added Successfully"},status=200)
		else:
			return Response(serializer.errors, status=400)
	except Exception as ex:
		return Response({"message":ex},status =500)