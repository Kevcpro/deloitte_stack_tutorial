from django.shortcuts import render
from rest_framework import viewsets
from .models import ToDoList
from .models import Category
from .serializers import ToDoListSerializer
from .serializers import CategorySerializer

# Create your views here.
class ToDoListView(viewsets.ModelViewSet):
    queryset = ToDoList.objects.all()
    serializer_class = ToDoListSerializer

class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer