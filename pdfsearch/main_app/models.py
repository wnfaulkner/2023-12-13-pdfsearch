from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField

class UserProfile(models.Model):
  # user = models.OneToOneField(User, on_delete=models.CASCADE)
  username = models.CharField(max_length=255, default='')

  def __str__(self):
    return self.user.username
    
class Pdfs(models.Model):
  # pdf_name = models.CharField(max_length=255)
  file_path = models.CharField(max_length=255, null=True)
  title = models.CharField(max_length=255, null=True)
  # authors = models.ListField(models.CharField(max_length=255))
  year = models.IntegerField(validators=[MinValueValidator(1500), MaxValueValidator(2023)], null=True)
  publication = models.CharField(max_length=255, blank=True, null=True)
  url = models.URLField(blank=True, null=True)
  
  # Many-to-one relationship with Profile class
  # profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
  
  def __str__(self):
    return self.title
  