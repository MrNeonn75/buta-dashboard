from django.urls import path
from . import views

urlpatterns = [
    path('', views.signin_up, name='signin'),
    path('logout/', views.exit, name='logout')
]