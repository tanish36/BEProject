from .models import contest2,contestproblem,contestuser
from rest_framework import serializers

class contestSerializer(serializers.ModelSerializer):
    class Meta:
        model = contest2
        fields = ("__all__")

class cpSerializer(serializers.ModelSerializer):
    class Meta:
        model = contestproblem
        fields = ("__all__")

class cuSerializer(serializers.ModelSerializer):
    class Meta:
        model = contestuser
        fields = ("__all__")



