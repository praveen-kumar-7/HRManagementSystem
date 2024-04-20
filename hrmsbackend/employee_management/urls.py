
from django.urls import path
from . import views

app_name = 'employee_management'

urlpatterns = [
    path('view_employees/', views.view_employee, name='view_employee'),
        path('update_attendance/', views.update_attendance, name='update_attendance'),
]
