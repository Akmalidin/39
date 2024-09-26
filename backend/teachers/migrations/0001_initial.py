# Generated by Django 4.2.13 on 2024-08-13 10:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Teacher',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('birth_date', models.DateField()),
                ('the_teacher_of', models.CharField(max_length=255)),
                ('faculty', models.CharField(max_length=255)),
                ('specialization', models.CharField(max_length=100)),
                ('experience', models.IntegerField(default=0)),
                ('phone_number', models.CharField(max_length=15)),
                ('photo', models.ImageField(blank=True, null=True, upload_to='teacher_photos/')),
            ],
        ),
    ]