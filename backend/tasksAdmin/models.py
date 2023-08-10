from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    TASK_STATUS = (
        ('to_do', "To Do"),
        ("in_progress", "In Progress"),
        ("done", "Done")
    )
    status_task = models.CharField(max_length=20, choices=TASK_STATUS, blank=True, default= 'to_do')
    update_date_task = models.DateField(null=True, blank=True)