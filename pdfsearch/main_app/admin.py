from django.contrib import admin
from .models import UserProfiles, Pdfs

# Register your models here.
admin.site.register(UserProfiles)
admin.site.register(Pdfs)