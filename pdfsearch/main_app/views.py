# MAIN APP VIEWS

from django.shortcuts import render
from django.http.response import JsonResponse

from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser 

from .serializers import PdfSerializer, UserProfilesSerializer
from .models import Pdfs, UserProfiles

# Create your views here.

class PdfView(viewsets.ModelViewSet):
  serializer_class = PdfSerializer
  queryset = Pdfs.objects.all()

class UserProfilesView(viewsets.ModelViewSet):
  serializer_class = UserProfilesSerializer
  queryset = UserProfiles.objects.all()

# def home(request):
  # return render(request, 'home.html')

@api_view(['GET', 'POST', 'DELETE'])
def pdfs_index(request):
  if request.method == 'POST':
    pdfs_data = JSONParser().parse(request)
    pdfs_serializer = PdfSerializer(data=pdfs_data)
  
  if pdfs_serializer.is_valid():
    pdfs_serializer.save()
    return JsonResponse(pdfs_serializer.data, status=status.HTTP_201_CREATED) 
  
  return JsonResponse(pdfs_serializer.errors, status=status.HTTP_400_BAD_REQUEST)