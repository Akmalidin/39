from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=100)
    date = models.DateField()
    description = models.TextField()
    image = models.ImageField(upload_to='event_images/', blank=True, null=True)

    def __str__(self):
        return self.title
