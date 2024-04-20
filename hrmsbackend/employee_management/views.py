from django.shortcuts import get_object_or_404
from django.utils import timezone
from .models import Employees_List, Attendance, PerformanceReview
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime, timedelta

@api_view(['GET'])
def view_employee(request):
    employees = Employees_List.objects.all().values()
    return Response(list(employees))

@api_view(['POST'])
def update_attendance(request):
    if request.method == 'POST':
        try:
            data = request.data
            for item in data:
                employee_id = item.get('employee_id')
                status = item.get('status')

                employee = get_object_or_404(Employees_List, id=employee_id)
                
                # Check if attendance is already marked for the selected date
                today = datetime.now().date()
                last_attendance = Attendance.objects.filter(employee=employee, date=today).first()
                
                if last_attendance:
                    last_attendance.status = status
                    last_attendance.save()
                else:
                    Attendance.objects.create(employee=employee, status=status, date=today)
            
            return Response({"success": "Attendance updated successfully"}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

    return Response({"error": "Invalid request method"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['GET'])
def get_attendance_data(request, date):
    try:
        formatted_date = datetime.strptime(date, '%Y-%m-%d').date()
        attendances = Attendance.objects.filter(date=formatted_date).values('employee_id', 'status')
        return Response(list(attendances))
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def review_list(request):
    if request.method == 'GET':
        reviews = PerformanceReview.objects.all().values()
        return Response(list(reviews))
    
    elif request.method == 'POST':
        data = request.data
        if 'employee_name' in data and 'review_date' in data and 'question_1' in data and 'question_2' in data:
            review = PerformanceReview.objects.create(
                employee_name=data['employee_name'],
                review_date=data['review_date'],
                question_1=data['question_1'],
                question_2=data['question_2'],
            )
            return Response({'message': 'Review saved successfully'}, status=status.HTTP_201_CREATED)
        else:
            return Response({'error': 'Missing required fields'}, status=status.HTTP_400_BAD_REQUEST)
