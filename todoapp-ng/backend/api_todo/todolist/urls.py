from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/todolist', views.ToDoListView)
router.register('api/category', views.CategoryView)

urlpatterns = [
    path('', include(router.urls))
]