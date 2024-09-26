from django.db import models

class Teacher(models.Model):
    name = models.CharField(max_length=100)
    the_teacher_of = models.CharField(max_length=255)
    photo = models.ImageField(upload_to='teacher_photos/', blank=True, null=True)  
    pdf_file = models.FileField(upload_to='pdf_files/', blank=True, null=True)  # Добавлено поле для PDF файла

    def __str__(self):
        return self.name
