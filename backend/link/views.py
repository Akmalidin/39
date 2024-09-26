from rest_framework import generics
from .models import Link
from .serializers import LinkSerializer

class LinkListCreate(generics.ListCreateAPIView):
    queryset = Link.objects.all()
    serializer_class = LinkSerializer
