# employee_onboarding/serializers.py

from rest_framework import serializers
from .models import AddEmployee

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddEmployee
        fields = '__all__'
