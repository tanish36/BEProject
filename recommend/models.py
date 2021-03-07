from django.db import models

class userrecommend(models.Model):
    problem_id = models.IntegerField()
    email = models.TextField()
    status = models.JSONField()
    timetaken = models.IntegerField()
    lineofcode = models.IntegerField()

class userrecommend2(models.Model):
    problem_id = models.IntegerField()
    email = models.TextField()
    nooftry = models.IntegerField()
    rating = models.TextField()
    difficulty = models.TextField()

class userrecommend3(models.Model):
    email = models.TextField()
    timespent =  models.IntegerField()
    tagsserach = models.TextField()
    tsc = models.IntegerField()
    tsp = models.IntegerField()




