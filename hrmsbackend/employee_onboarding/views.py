from django.http import JsonResponse
from employee_management.models import Employees_List  # Importing EmployeesList from employee_management
from .forms import AddEmployeeForm
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def add_employee(request):
    if request.method == 'POST':
        try:
            # Extract data from request body as JSON
            data = json.loads(request.body)
            
            # Create form instance with the extracted data
            form = AddEmployeeForm(data)
            
            if form.is_valid():
                # Save form data to EmployeesList model in employee_management
                Employees_List.objects.create(
                    full_name=data['full_name'],
                    experience=data['experience'],
                    department=data['department'],
                    email=data['email'],
                    phone_number=data['phone_number'],
                    address=data['address']
                )
                
                print("Saved successfully")
                return JsonResponse({'status': 'success'})
            else:
                print("Form errors:", form.errors)
                print("Form non_field_errors:", form.non_field_errors())
                return JsonResponse({'status': 'error', 'errors': form.errors}, status=400)
        
        except json.JSONDecodeError:
            return JsonResponse({'status': 'error', 'message': 'Invalid JSON'}, status=400)
        
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    
    else:
        # Return a 405 Method Not Allowed status for GET requests
        return JsonResponse({'status': 'error', 'message': 'Method Not Allowed'}, status=405)
