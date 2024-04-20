from django.db import models

class AddEmployee(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    department = models.CharField(max_length=255)
    experience= models.CharField(max_length=11)
    address = models.TextField()
    phone_number = models.CharField(max_length=15)
  
   
    
    
