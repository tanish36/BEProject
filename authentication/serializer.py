from .models import user
from rest_framework import serializers

class userserializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = ("__all__")

class loginSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = ("email","password")
