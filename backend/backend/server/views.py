from rest_framework.parsers import MultiPartParser, FormParser
from django.conf import settings
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import os
from rest_framework.decorators import api_view
from PyPDF2 import PdfReader
import google.generativeai as genai
import os



@csrf_exempt
@api_view(['POST'])
def resume_upload(request):
    file = request.FILES.get('file')
    print(file)
    if not file:
        return JsonResponse({"error": "No file uploaded"}, status=400)
    
    reader = PdfReader(file)
    totalPages = len(reader.pages)
    text = ''
    for page in range(totalPages):
        curr_page = reader.pages[page]
        text += curr_page.extract_text()

    genai.configure(api_key="AIzaSyCpLTttZ7OyMDYVSRSUWBBz0pr-kEbmBZ0")
    model = genai.GenerativeModel("gemini-1.5-flash")

    initial_prompt = f"Use this file with the following text to grade the resume out of 100 appropriately. Give feedback, reasons and sugesstions for the same. Your response should be in the format '60(replace 60 with actual score). Feedback: (enter feedback here). Resume Text: {text}"
    res = model.generate_content(initial_prompt).text

    resume_score = res[:2]
    feedback = res[6:]

    return JsonResponse({
        'score': resume_score,
        'feedback': feedback
    })
    