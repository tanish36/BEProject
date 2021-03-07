from django.db import models

class userrecommend(models.Model):
    problem_id = models.IntegerField()
    email = models.TextField()
    status = models.TextField(null=True)
    lineofcode = models.IntegerField()

class userrecommend2(models.Model):
    problem_id = models.IntegerField()
    email = models.TextField()
    nooftry = models.IntegerField(default=0)
    itime = models.DateTimeField(null=True)
    ftime = models.DateTimeField(null=True)

class userrecommend3(models.Model):
    email = models.TextField()
    topicid = models.IntegerField(null=True)

class userrecommend4(models.Model):
    email = models.TextField()
    loginstarttime = models.DateTimeField()
    loginendtime = models.DateTimeField(null=True)




