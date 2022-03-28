from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django import forms
from .models import *


class Alumniregisterform(UserCreationForm):
	email = forms.EmailField(max_length=100, help_text='Required. Add a valid email address')

	class Meta:
		model = AlumniRegister
		fields = ("email", "username","first_name","last_name","phone_number","college","degree_field","degree_branch","passing_year","doc_url", "password1", "password2")

