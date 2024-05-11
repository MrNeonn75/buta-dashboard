from django.shortcuts import render
from .models import EventModel

def index(request):
    queryset = EventModel.objects.all()
    
    data = {
        'events' : queryset
    }
    
    return render(request, 'index.html', data)