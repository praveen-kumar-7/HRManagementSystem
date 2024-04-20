from django.db import models

class JobDescription(models.Model):
    title = models.CharField(max_length=255)
    level = models.CharField(max_length=50)
    category = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    hours = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return self.title
