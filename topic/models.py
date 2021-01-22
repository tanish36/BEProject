from django.db import models

class topic(models.Model):
    topic_id = models.AutoField(primary_key=True)
    topic_module = models.TextField()
    topic_name = models.TextField()
    topic_vlink = models.TextField()
    topic_content = models.TextField()