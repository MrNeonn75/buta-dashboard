from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(max_length=500, blank=True)
    birht_date = models.DateField(null=True, blank=True)
    profile_image = models.ImageField("Profile image", upload_to="users/")
    
    def __str__(self):
        return self.user.username
    
    class Meta:
        verbose_name_plural = 'Users\' data'
