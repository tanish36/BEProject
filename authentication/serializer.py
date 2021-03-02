from .models import *
from rest_framework import serializers

class userserializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = ("__all__")

class loginSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = ("email","password")

class submissionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = submissions
        fields = ("_all_")

class historySerializer(serializers.ModelSerializer):
    class Meta:
        model = history
        fields = ("_all_")
