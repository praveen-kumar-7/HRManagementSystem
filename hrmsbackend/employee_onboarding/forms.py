from django import forms
from .models import AddEmployee

class AddEmployeeForm(forms.ModelForm):
    class Meta:
        model = AddEmployee
        fields = '__all__'
