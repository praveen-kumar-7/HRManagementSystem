# myproject/urls.py

from django.contrib import admin
from django.urls import path, include
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('employee_onboarding.urls')),
    path('', include('employee_management.urls')),
    path('', include('auth_system.urls')),
    path('', include('recruitment_system.urls')),
    path('', include('payrolls.urls')),

    # Add more URL patterns as needed
]
