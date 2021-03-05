from django.db import models

class problem(models.Model):
    problem_id = models.AutoField(primary_key=True)
    problem_name = models.TextField()
    problem_statement = models.TextField()
    problem_tags = models.TextField(null=True)
    problem_input = models.TextField(null=True)#example
    problem_output = models.TextField(null=True)#constrains
    problem_example = models.TextField(null=True)#test case
    problem_samplecase = models.TextField(null=True)
    problem_score = models.TextField(null=True) 
    problem_noofsubmission = models.TextField(null=True)

class problemfeedback(models.Model):
    problem_feedback = models.TextField()
    email = models.TextField()
    problem_id = models.IntegerField()


