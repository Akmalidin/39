from django.urls import path
from .views import EventListCreate

urlpatterns = [
    path('events/', EventListCreate.as_view(), name='event-list-create'),
]
