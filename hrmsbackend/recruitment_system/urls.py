from django.urls import path
from . import views

urlpatterns = [
    # ... other URL patterns
    path('create_job_description/', views.create_job_description, name='create_job_description'),
    path('vacancy_list_view/', views.vacancy_list_view, name='vacancy_list_view'),
]
