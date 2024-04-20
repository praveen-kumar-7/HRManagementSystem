from django.db import models

class Employees_List(models.Model):
    full_name = models.CharField(max_length=255)
    experience = models.CharField(max_length=50)
    department = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15)
    address = models.TextField()
    salary=models.IntegerField(default= 0)

    def __str__(self):
        return self.full_name

class Attendance(models.Model):
    employee = models.ForeignKey(Employees_List, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    status = models.CharField(max_length=50, choices=[('present', 'Present'), ('absent', 'Absent')])
# models.py

class PerformanceReview(models.Model):
    employee_name = models.CharField(max_length=255)
    review_date = models.DateTimeField()
    question_1 = models.TextField()
    question_2 = models.TextField()
    # Add more questions as needed
