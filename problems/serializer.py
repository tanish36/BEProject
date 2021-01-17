from .models import problem
from rest_framework import serializers

class problemserializer(serializers.ModelSerializer):
    class Meta:
        model = problem
        fields = ("__all__")


