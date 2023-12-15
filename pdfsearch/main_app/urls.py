# FRONTEND URLS

from django.conf.urls import path 
from main_app import views 
 
urlpatterns = [ 
  # path('', views.home, name='home'),

  # path('accounts/signup/', views.signup, name='signup'),

  path('pdfs/', views.pdfs_index, name='pdfs_index'),
]