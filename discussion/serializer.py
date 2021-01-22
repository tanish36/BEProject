from .models import discussion,response
from rest_framework import serializers

class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = discussion
        fields = ("discussionId","title")

class discussionSerializer(serializers.ModelSerializer):
    class Meta:
        model = discussion
        fields = ("_all_")

class responseSerializer(serializers.ModelSerializer):
    class Meta:
        model = response
        fields = ("__all__")

class newDiscussionSerializer(serializers.ModelSerializer):
    class Meta:
        model = discussion
        fields = ("email","title","content")

class newResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = response
        fields = ("discussionId","email","content")

