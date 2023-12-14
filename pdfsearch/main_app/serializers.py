# SERIALIZERS

from rest_framework import serializers 
from main_app.models import UserProfile, Pdfs 

class UserProfileSerializer(serializers.ModelSerializer):

  class Meta:
    model = UserProfile
    fields = (
      'username'
    )

class PdfSerializer(serializers.ModelSerializer):

  class Meta:
    model = Pdfs
    fields = (
      'file_path',
      'title',
      'year',
      'publication',
      'url',
    )

