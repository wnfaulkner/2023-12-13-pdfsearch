from django.contrib import admin
from .models import UserProfile, Pdfs

# Register your models here.
admin.site.register(UserProfile)
admin.site.register(Pdfs)