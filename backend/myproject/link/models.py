from django.db import models

class Link(models.Model):
    link_tiktok = models.CharField(max_length=250)
    link_instagram = models.CharField(max_length=250)
    link_facebook = models.CharField(max_length=250)
    link_twitter = models.CharField(max_length=250)
    
    def __str__(self):
        return self.link_tiktok  # or any other field you'd prefer to represent the instance
