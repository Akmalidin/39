from django.db import models

class Link(models.Model):
    link_youtube = models.CharField(max_length=250)
    link_instagram = models.CharField(max_length=250)
    link_facebook = models.CharField(max_length=250)
    link_twitter = models.CharField(max_length=250)
    
    def __str__(self):
        return f"Youtube: {self.link_youtube}, Instagram: {self.link_instagram}, Facebook: {self.link_facebook}, Twitter: {self.link_twitter}"
