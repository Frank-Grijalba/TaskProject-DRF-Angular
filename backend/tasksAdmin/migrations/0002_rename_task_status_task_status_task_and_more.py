# Generated by Django 4.2.4 on 2023-08-10 16:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasksAdmin', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='task_status',
            new_name='status_task',
        ),
        migrations.RenameField(
            model_name='task',
            old_name='task_update_date',
            new_name='update_date_task',
        ),
    ]
