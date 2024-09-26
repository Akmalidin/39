from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('personal/', include('personal.urls')),
    path('contact/', include('contact.urls')),
    path('review/', include('review.urls')),
    path('event/', include('events.urls')),
    path('teacher/', include('teachers.urls')),
    path('gallery/', include('gallery.urls')), 
    path('link/', include('link.urls')), 
]

# Add this line to serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)