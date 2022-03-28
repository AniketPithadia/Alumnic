from rest_framework import serializers
from .models import *


class AlumniSerializer(serializers.ModelSerializer):
	class Meta:
		model = AlumniRegister
		fields = ['email','username','first_name','last_name','phone_number','college','degree_field','degree_branch','passing_year' ,'doc_url','password','password2']

	#remove this save fn if error comes up because we already have set_password fn in models.py
	def save(self):
		account = AlumniRegister(
			email=self.validated_data['email'],
			username=self.validated_data['username'],
			first_name=self.validated_data['first_name'],
			last_name=self.validated_data['last_name'],
			phone_number=self.validated_data['phone_number'],
			college=self.validated_data['college'],
			degree_field=self.validated_data['degree_field'],
			degree_branch=self.validated_data['degree_branch'],
			passing_year=self.validated_data['passing_year'],
			doc_url=self.validated_data['doc_url']
		)
		password = self.validated_data['password']
		password2 = self.validated_data['password2']
		if password != password2:
			raise serializers.ValidationError({'password': 'Passwords must match.'})
		account.set_password(password)
		account.save()
		return account
