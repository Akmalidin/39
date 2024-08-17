from django.db import models

class Gallery(models.Model):
    title = models.CharField(max_length=255, default='Default Title')
    image = models.ImageField(upload_to='gallery/')  # Поле для изображения

    def __str__(self):
        return self.title  # Возвращаем значение title в методе __str__
