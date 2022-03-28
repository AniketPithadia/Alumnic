from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from .forms import *
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import *
from django.http import JsonResponse
from .models import *
from django.contrib import messages
from django.forms import inlineformset_factory


@api_view(['POST','GET'])
def register(request):
    data = {}
    serial = AlumniSerializer()
    if request.POST:
        serial = AlumniSerializer(data=request.data)
        data = {}
        if serial.is_valid():
            account = serial.save()
            data['response'] = "successfully registered"
            data['email'] = account.email
            data['username'] = account.username
        else:
            data = serial.errors
    return Response(data)


# def register(request):
#     context = {}
#     form = Alumniregisterform()
#     if request.POST:
#         form = Alumniregisterform(request.POST)
#         if form.is_valid():
#             form.save()
#             email = form.cleaned_data.get('email')
#             raw_password = form.cleaned_data.get('password1')
#             account = authenticate(email=email, password=raw_password)
#             login(request, account)
#             return redirect('home')
#
#     context['registration_form'] = form
#     return render(request, 'registerpage.html', context)


# def json(request):
#     data = list(AlumniRegister.objects.values())
#     return JsonResponse(data, safe=False)