# Generated by Django 3.1.1 on 2021-01-22 18:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('discussion', '0002_auto_20210122_2329'),
    ]

    operations = [
        migrations.CreateModel(
            name='responsetable',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=120, verbose_name='email')),
                ('discussionId', models.CharField(max_length=1000)),
                ('content', models.CharField(max_length=1000, verbose_name='content')),
            ],
        ),
        migrations.DeleteModel(
            name='response',
        ),
    ]