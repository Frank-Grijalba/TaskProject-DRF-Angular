from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer): # Permite consultar los campos seleccionados de un modelo
    class Meta:
        model = Task
        fields = ('id', 'title', 'description', 'created', 'task_status', 'task_update_date')
        read_only_fields = ('created', )