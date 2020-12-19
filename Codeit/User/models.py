from firebase_orm import models


class Article(models.Model):
    headline = models.TextField()
    type_article = models.TextField(db_column='type')

    class Meta:
        db_table = 'medications'

    def __str__(self):
        return self.headline