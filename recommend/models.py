from django.db import models

class userrecommend6(models.Model):
    problem_id = models.IntegerField()
    email = models.TextField()
    status = models.TextField()
    lineofcode = models.IntegerField()

class userrecommend7(models.Model):
    problem_id = models.IntegerField()
    email = models.TextField()
    nooftry = models.IntegerField(default=0)
    itime = models.DateTimeField(null=True)
    ftime = models.DateTimeField(null=True)

class userrecommend8(models.Model):
    email = models.TextField()
    topicid = models.IntegerField(null=True)

class userrecommend9(models.Model):
    email = models.TextField()
    loginstarttime = models.DateTimeField()
    loginendtime = models.DateTimeField(null=True)




