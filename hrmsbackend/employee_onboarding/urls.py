from django.urls import path
from . import views

urlpatterns = [
    path('view_employee', views.Employees_List, name='employee_list'),

    path('add_employee/', views.add_employee, name='add_employee'),
]