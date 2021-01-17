from .models import topic
from rest_framework import serializers

class topicserializer(serializers.ModelSerializer):
    class Meta:
        model = topic
        fields = ("__all__")