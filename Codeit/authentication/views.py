from django.shortcuts import render
from models import user

# Create your views here.

def register(request):
	if request.method == 'POST':
		try:

