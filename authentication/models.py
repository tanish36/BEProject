from django.db import models


class user(models.Model):
    email = models.TextField()
    password = models.TextField()
    firstname = models.CharField(max_length=200)
    lastname = models.CharField(max_length=200)
    isadmin = models.CharField(max_length=200,default = 'False')
    rank = models.IntegerField(default = 500)

