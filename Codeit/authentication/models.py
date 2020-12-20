from django.db import models

# Create your models here.



class user(models.Model):
    email = models.TextField()
    password = models.TextField()
    firstname = models.CharField(max_length=200)
    lastname = models.CharField(max_length=200)
