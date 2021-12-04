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
             return render(request,'home.html')
    context  ={'form':form}
    return render(request,'inscription.html',context)

