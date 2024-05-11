from django.db import models

class UnievrsityModel(models.Model):
    university = models.CharField("University", max_length=200)
    
    def __str__(self):
        return self.university
    
    class Meta:
        verbose_name_plural = "Universities"
        
class SpecialityModel(models.Model):
    speciality = models.CharField("Speciality", max_length=200)
    
    def __str__(self):
        return self.speciality
    
    class Meta:
        verbose_name_plural= "Specialities"

class MemberModel(models.Model):
    SEX_CHOICES = [
        ("Kişi","Kişi"),
        ("Qadın","Qadın")
    ]
    
    name = models.CharField("Name", max_length=50)
    surname = models.CharField("Surname", max_length=50)
    sex = models.CharField("Sex", choices=SEX_CHOICES, max_length=10)
    age = models.IntegerField("Age")
    university = models.ForeignKey(UnievrsityModel, on_delete=models.CASCADE)
    speciality = models.ForeignKey(SpecialityModel, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = "Members"
