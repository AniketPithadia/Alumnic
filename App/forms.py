from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django import forms
from .models import *


class Alumniregisterform(UserCreationForm):
	email = forms.EmailField(max_length=100, help_text='Required. Add a valid email address')

	class Meta:
		model = AlumniRegister
		fields = ("email", "username","first_name","last_name","phone_number","college","degree_field","degree_branch","passing_year","doc_url", "password1", "password2")


# class CreateUserForm(UserCreationForm):
#     first_name = forms.CharField(max_length=12, min_length=4, required=True, help_text='Required: First Name',
#                                  widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'First Name'}))
#     last_name = forms.CharField(max_length=12, min_length=4, required=True, help_text='Required: Last Name',
#                                 widget=(forms.TextInput(attrs={'class': 'form-control'})))
#     email = forms.EmailField(max_length=50, help_text='Required. Inform a valid email address.',
#                              widget=(forms.TextInput(attrs={'class': 'form-control'})))
#     password1 = forms.CharField(label=('Password'),
#                                 widget=(forms.PasswordInput(attrs={'class': 'form-control'})),
#                                 help_text=password_validation.password_validators_help_text_html())
#     password2 = forms.CharField(label=('Password Confirmation'),
#                                 widget=forms.PasswordInput(attrs={'class': 'form-control'}),
#                                 help_text=('Just Enter the same password, for confirmation'))
#     username = forms.CharField(
#         label=('Username'),
#         max_length=150,
#         help_text=('Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.'),
#         error_messages={'unique': ("A user with that username already exists.")},
#         widget=forms.TextInput(attrs={'class': 'form-control'})
#     )
#
#
#     class Meta:
#         model = User
#         fields = ['username', 'email', 'password1', 'password2']

