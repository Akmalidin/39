from rest_framework import serializers
from .models import Teacher

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ['id', 'name', 'the_teacher_of', 'photo', 'pdf_file']
