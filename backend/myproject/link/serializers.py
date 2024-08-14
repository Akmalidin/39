from rest_framework import serializers
from .models import Link

class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = ['link_tiktok', 'link_instagram', 'link_facebook', 'link_twitter']  # Include all the necessary fields
