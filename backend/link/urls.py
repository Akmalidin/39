from django.urls import path
from .views import LinkListCreate

urlpatterns = [
    path('links/', LinkListCreate.as_view(), name='event-list-create'),
]
