from django.db import models
import uuid
# Create your models here.

class discussion(models.Model):
    discussionId = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.CharField(max_length=120, unique=True, verbose_name="email")
    title = models.CharField(max_length=200, verbose_name="title")
    content = models.CharField(max_length=1000, verbose_name="content")

class response(models.Model):
    email = models.CharField(max_length=120, unique=True, verbose_name="email")
    discussionId = models.UUIDField(primary_key=False, default=uuid.uuid4, editable=False)
    content = models.CharField(max_length=1000, verbose_name="content")

