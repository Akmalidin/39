# Generated by Django 4.2.13 on 2024-08-13 10:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('teachers', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='teacher',
            name='specialization',
        ),
    ]
