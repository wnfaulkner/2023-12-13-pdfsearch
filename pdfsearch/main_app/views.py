# MAIN APP VIEWS

from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PdfSerializer #, UserProfileSerializer
from .models import Pdfs #, UserProfile

# Create your views here.

class PdfView(viewsets.ModelViewSet):
    serializer_class = PdfSerializer
    queryset = Pdfs.objects.all()