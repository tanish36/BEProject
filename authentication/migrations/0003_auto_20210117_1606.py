# Generated by Django 3.1.1 on 2021-01-17 10:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_auto_20201220_2232'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='isadmin',
            field=models.CharField(default='False', max_length=200),
        ),
        migrations.AddField(
            model_name='user',
            name='rank',
            field=models.IntegerField(default=500),
        ),
    ]
