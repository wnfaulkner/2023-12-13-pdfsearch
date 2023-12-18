# SERIALIZERS

from rest_framework import serializers 
from main_app.models import UserProfiles, Pdfs 

class UserProfilesSerializer(serializers.ModelSerializer):

  class Meta:
    model = UserProfiles
    fields = (
      'user',
      'username',
    )

class PdfSerializer(serializers.ModelSerializer):

  class Meta:
    model = Pdfs
    fields = (
      'title',
      'year',
      'publication',
      # 'user',
    )

