from django.db import models

class Task(models.Model):
    
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    created = models.DateTimeField(auto_now=True)
    TASK_STATUS = (
        ("TO DO", "TO DO"),
        ("IN PROGRESS", "IN PROGRESS"),
        ("DONE", "DONE")
    )
    status_task = models.CharField(max_length=20, choices=TASK_STATUS, blank=True, default= "TO DO")
    update_date_task = models.DateField(null=True, blank=True)

