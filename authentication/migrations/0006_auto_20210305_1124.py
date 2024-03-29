# Generated by Django 3.1.1 on 2021-03-05 05:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0005_auto_20210305_1114'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='history',
            name='user_id',
        ),
        migrations.RemoveField(
            model_name='submissions',
            name='user_id',
        ),
        migrations.AddField(
            model_name='history',
            name='email',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='submissions',
            name='email',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.TextField(),
        ),
    ]
