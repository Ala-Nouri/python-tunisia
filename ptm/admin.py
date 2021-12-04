from django.contrib import admin
from django.contrib.auth.models import Group,User
from .models import participant

# Register your models here.
@admin.register(participant)
class participantadmin(admin.ModelAdmin):
    list_display = ('f_name','l_name','tel','email','gender','date')
    list_filter = ('gender',)



admin.site.unregister(Group)
admin.site.unregister(User)