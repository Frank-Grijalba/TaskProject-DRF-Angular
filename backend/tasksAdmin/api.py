from .models import Task
from rest_framework import viewsets, permissions
from .serializers import TaskSerializer

class TaskViewSet(viewsets.ModelViewSet): # Que consultas se pueden realizar
    queryset = Task.objects.all() # Consulta todos los datos de Task
    permission_classes = [permissions.AllowAny] # AllowAny = cualquier sinverguenza puede consultar
    serializer_class = TaskSerializer