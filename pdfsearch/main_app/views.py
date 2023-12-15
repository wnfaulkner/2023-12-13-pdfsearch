# MAIN APP VIEWS

from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PdfSerializer, UserProfilesSerializer
from .models import Pdfs, UserProfiles

# Create your views here.

class PdfView(viewsets.ModelViewSet):
    serializer_class = PdfSerializer
    queryset = Pdfs.objects.all()

class UserProfilesView(viewsets.ModelViewSet):
    serializer_class = UserProfilesSerializer
    queryset = UserProfiles.objects.all()