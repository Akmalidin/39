from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=100)
    admin = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=18)
    email = models.CharField(max_length=250)
    photo = models.ImageField(upload_to='teacher_photos/', blank=True, null=True)  

    def __str__(self):
        return self.name
