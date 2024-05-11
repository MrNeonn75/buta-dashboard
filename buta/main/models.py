from django.db import models

class EventModel(models.Model):
    title = models.CharField("Title", max_length=200)
    article = models.TextField('Article')
    date = models.DateTimeField('Date', auto_now=True)
    
    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name_plural = "Events"