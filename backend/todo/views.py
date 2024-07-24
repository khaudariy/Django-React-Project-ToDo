from rest_framework import viewsets
from .serialzers import ToDoSerilizer
from .models import ToDo


class ToDoViewset(viewsets.ModelViewSet):
    serializer_class = ToDoSerilizer
    queryset = ToDo.objects.all()