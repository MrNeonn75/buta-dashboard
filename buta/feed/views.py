from django.shortcuts import render
from .models import FeedModel

def feed(request):
    queryset = FeedModel.objects.all()
    
    data = {
        'feed' : queryset
    }
    
    return render(request, 'feed.html', data)
