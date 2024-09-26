from django.urls import path
from .views import PersonalListCreate

urlpatterns = [
    path('personals/', PersonalListCreate.as_view(), name='teacher-list-create'),
]
