from django.shortcuts import render
from .models import MemberModel

def members(request):
    queryset = MemberModel.objects.all()
    
    data = {
        'queryset' : queryset,
    }
    
    return render(request, 'members.html', data)
