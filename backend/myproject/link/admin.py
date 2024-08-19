from django.contrib import admin
from .models import Link

@admin.register(Link)
class LinkAdmin(admin.ModelAdmin):
    list_display = ('link_youtube', 'link_instagram', 'link_facebook', 'link_twitter')
