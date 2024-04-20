from django.urls import path
from . import views

urlpatterns = [
    path('<int:employee_id>/process/', views.process_payroll, name='process_payroll'),
    path('<int:employee_id>/reject/', views.reject_payroll, name='reject_payroll'),
    path('get_employees/', views.get_employees, name='get_employees'),
]
