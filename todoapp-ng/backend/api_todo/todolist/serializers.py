from rest_framework import serializers
from todolist.models import ToDoList
from todolist.models import Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name', 'id']
    
class ToDoListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDoList
        id = serializers.IntegerField(read_only=True)
        fields = ['id', 'title', 'content', 'created', 'due_date', 'completed', 'category']
