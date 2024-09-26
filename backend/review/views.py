from rest_framework import generics
from .models import Review
from .serializers import ReviewSerializer

class ReviewListCreate(generics.ListCreateAPIView):
    queryset = Review.objects.all().order_by('-date_posted')
    serializer_class = ReviewSerializer
