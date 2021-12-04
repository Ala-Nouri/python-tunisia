from django.db import models


class participant (models.Model):
    f_name = models.CharField(max_length=20)
    l_name = models.CharField(max_length=20)
    email = models.EmailField(max_length=254,unique=True)
    tel = models.CharField(max_length=8)
    Choices = (
            ('female', 'F'),
            ('male', 'M'),
            
        )
    gender = models.CharField(max_length=30, default=None, choices=Choices)
    date = models.DateField(("date"), auto_now=False, auto_now_add=False)





