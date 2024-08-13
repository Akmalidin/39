from django.db import models

class Gallery(models.Model):
    image = models.ImageField(upload_to='gallery_images/', blank=True, null=True)

    def __str__(self):
        return self.image.name  # Returns the name of the uploaded file
