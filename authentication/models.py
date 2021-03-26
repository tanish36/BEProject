from django.db import models


class user(models.Model):
    user_id = models.AutoField(primary_key=True)
    email = models.TextField()
    password = models.TextField()
    firstname = models.CharField(max_length=200)
    lastname = models.CharField(max_length=200)
    isadmin = models.CharField(max_length=200,default = "False",null=True)
    rank = models.IntegerField(default = 500,null=True)
    recommended =  models.TextField(null=True)

class submissions(models.Model):
    email = models.TextField(null=True)
    ac = models.IntegerField()
    wa = models.IntegerField()
    tle = models.IntegerField()

class history(models.Model):
    email = models.TextField(null=True)
    rank = models.IntegerField()
    timestamp = models.DateTimeField()
