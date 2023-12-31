# Generated by Django 4.2.4 on 2023-08-12 00:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasksAdmin', '0002_rename_task_status_task_status_task_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='created',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='status_task',
            field=models.CharField(blank=True, choices=[('To Do', 'To Do'), ('In Progress', 'In Progress'), ('Done', 'Done')], default='To Do', max_length=20),
        ),
    ]
