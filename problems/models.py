from django.db import models

class problem(models.Model):
    problem_id = models.AutoField(primary_key=True)
    problem_name = models.TextField()
    problem_statement = models.TextField()
    problem_tags = models.TextField()
    problem_io = models.TextField()#example
    problem_con = models.TextField()#constrains
    problem_test = models.TextField()#test case 

