# Generated by Django 4.2.13 on 2024-08-19 07:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('personal', '0002_remove_personal_phone_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='personal',
            name='pdf_file',
            field=models.FileField(blank=True, null=True, upload_to='pdf_files/'),
        ),
    ]