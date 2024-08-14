from rest_framework import generics
from .models import Personal
from .serializers import PersonalSerializer

class PersonalListCreate(generics.ListCreateAPIView):
    queryset = Personal.objects.all()
    serializer_class = PersonalSerializer
