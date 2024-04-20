from django.shortcuts import render
from django.http import JsonResponse
from .models import JobDescription
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def create_job_description(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        title = data.get('title', '')
        level = data.get('level', '')
        category = data.get('category', '')
        location = data.get('location', '')
        hours = data.get('hours', '')
        description = data.get('description', '')

        job_description = JobDescription(
            title=title,
            level=level,
            category=category,
            location=location,
            hours=hours,
            description=description
        )
        job_description.save()

        return JsonResponse({'success': 'Job description created successfully'}, status=201)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

def vacancy_list_view(request):
    jobs = JobDescription.objects.all().values('id', 'title', 'level', 'category', 'location', 'hours', 'description')

    return JsonResponse(list(jobs), safe=False)
