from django.forms.models import ModelForm
from django.utils import translation
from .models import participant
from django import forms

class p_form(ModelForm):
    class Meta :
        model=participant
        Choices = (
            ('female', 'F'),
            ('male', 'M'),
            
        )
        fields=[ 'f_name','l_name','tel','email','gender','date']  
        widgets = {
        'first name' :forms.TextInput(),
        'last name':forms.TextInput(),
        'email':forms.TextInput(),
        'tel' :forms.TextInput(),
        'date': forms.DateInput(format=('%Y-%m-%d'), attrs={'placeholder':'Select a date', 'type':'date'}),
        'gender':forms.RadioSelect(choices=Choices ,attrs={})
    }