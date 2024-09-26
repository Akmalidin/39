from rest_framework import serializers
from .models import Personal

class PersonalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personal
        fields = ['id', 'name', 'the_teacher_of', 'photo', 'pdf_file']  