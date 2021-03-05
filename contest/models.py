from django.db import models
import uuid
# Create your models here.

class contest2(models.Model):
    contestid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    duration = models.IntegerField()
    title = models.CharField(max_length=200)
    timestamp = models.DateTimeField()

class contestproblem(models.Model):
    contestid = models.CharField(max_length=200)
    problemid = models.CharField(max_length=1000)

class contestuser(models.Model):
    contestid = models.CharField(max_length=200)
    email = models.CharField(max_length=1000)
    score = models.IntegerField(default=0)
    problemid = models.CharField(max_length=1000,null=True)
    

