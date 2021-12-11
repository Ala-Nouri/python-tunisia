from django.shortcuts import render
from .forms import p_form


def home(request):
    return render(request,'home.html')

def inscription(request):
    form=p_form
    if request.method=='POST':
        data=request.POST
        form=p_form(data)
        if form.is_valid():
             obj=form.save(commit=False)
             obj.save()
    context  ={'form':form}
    return render(request,'inscription.html',context)

def about(request):
    return render(request,'about.html')

def sponsors(request):
    return render(request,'sponsors.html')

def program(request):
    return render(request,'program.html')

