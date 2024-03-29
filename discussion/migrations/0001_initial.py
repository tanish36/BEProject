# Generated by Django 3.1.1 on 2021-01-22 17:26

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='discussion',
            fields=[
                ('discussionId', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('email', models.CharField(max_length=120, unique=True, verbose_name='email')),
                ('title', models.CharField(max_length=200, verbose_name='title')),
                ('content', models.CharField(max_length=1000, verbose_name='content')),
            ],
        ),
        migrations.CreateModel(
            name='response',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=120, unique=True, verbose_name='email')),
                ('discussionId', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('content', models.CharField(max_length=1000, verbose_name='content')),
            ],
        ),
    ]
