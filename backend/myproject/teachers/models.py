from django.db import models

class Teacher(models.Model):
    name = models.CharField(max_length=100)
    the_teacher_of = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=18)
    photo = models.ImageField(upload_to='teacher_photos/', blank=True, null=True)  

    def __str__(self):
        return self.name
