from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from .forms import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from .models import *
from django.contrib import messages
from django.forms import inlineformset_factory


def home(request):
    return render(request, 'home.html')


@api_view(['GET'])
def register(request):
    context = {}
    form = Alumniregisterform()
    if request.POST:
        form = Alumniregisterform(request.POST)
        if form.is_valid():
            form.save()
            email = form.cleaned_data.get('email')
            raw_password = form.cleaned_data.get('password1')
            account = authenticate(email=email, password=raw_password)
            login(request, account)
            return redirect('home')

    context['registration_form'] = form
    return render(request, 'registerpage.html', context)


# def json(request):
#     data = list(AlumniRegister.objects.values())
#     return JsonResponse(data, safe=False)