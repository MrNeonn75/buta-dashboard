from django.db import models
from accounts.models import UserProfile

class FeedModel(models.Model):
    title = models.CharField("Title", max_length=200)
    message = models.TextField("Message")
    date = models.DateTimeField("Date", auto_now=True)
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name_plural = "Feed"