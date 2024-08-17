from django.db import migrations, models

def update_existing_rows(apps, schema_editor):
    Gallery = apps.get_model('gallery', 'Gallery')
    for gallery in Gallery.objects.filter(image__isnull=True):
        gallery.image = 'default_image.jpg'  # Укажите путь к изображению по умолчанию
        gallery.save()

class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(update_existing_rows),
    ]
