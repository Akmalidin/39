# Generated by Django 4.2.13 on 2024-08-19 11:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('link', '0003_rename_link_youtube_link_link_tiktok'),
    ]

    operations = [
        migrations.RenameField(
            model_name='link',
            old_name='link_tiktok',
            new_name='link_youtube',
        ),
    ]
