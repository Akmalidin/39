from django.urls import path
from .views import TeacherListCreate

urlpatterns = [
    path('teachers/', TeacherListCreate.as_view(), name='teacher-list-create'),
]
