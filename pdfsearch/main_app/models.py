# MODELS

from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField

class UserProfiles(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE, default=1)
  username = models.CharField(max_length=255, default='')

  def __str__(self):
    return self.user.username
    
class Pdfs(models.Model):
  # pdf_name = models.CharField(max_length=255)
  # file_path = models.CharField(max_length=255, null=True)
  title = models.CharField(max_length=255, null=True)
  # authors = models.ArrayField(models.CharField(max_length=255))
  year = models.IntegerField(validators=[MinValueValidator(1500), MaxValueValidator(2023)], null=True)
  publication = models.CharField(max_length=255, blank=True, null=True)
  # url = models.URLField(blank=True, null=True)
  
  # Many-to-one relationship with Profile class
  # user_profile = models.ForeignKey(UserProfiles, on_delete=models.CASCADE, default=1)
  
  def __str__(self):
    return self.title
  