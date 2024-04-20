from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from employee_management.models import Employees_List
from django.shortcuts import get_object_or_404

# Get all employees data
def get_employees(request):
    employees = Employees_List.objects.all().values('id', 'full_name', 'email', 'salary')
    return JsonResponse(list(employees), safe=False)

# Process payroll for an employee
@csrf_exempt
def process_payroll(request, employee_id):
    if request.method == 'POST':
        employee = Employees_List.objects.get(id=employee_id)
        employee.status = 'Processed'
        employee.save()
        return JsonResponse({'message': 'Payroll processed successfully.', 'status': employee.status})

# Reject payroll for an employee
@csrf_exempt
def reject_payroll(request, employee_id):
    if request.method == 'POST':
        employee = Employees_List.objects.get(id=employee_id)
        employee.status = 'Rejected'
        employee.save()
        return JsonResponse({'message': 'Payroll rejected successfully.', 'status': employee.status})