# gallery/urls.py
from django.urls import path
from .views import GalleryListCreate

urlpatterns = [
    path('gallery/', GalleryListCreate.as_view(), name='gallery-list-create'),
]
