from django.forms import CharField, PasswordInput, EmailInput
from django.contrib.auth.forms import AuthenticationForm, UsernameField
from django import forms


class LoginForm(AuthenticationForm):
    username = UsernameField(label='İstifadəçi adı', widget=EmailInput(attrs={
        'placeholder' : 'İstifadəçi adı',
        'class'       : 'form-control',
        'type'        : 'text',
        'id'          : 'email',
    }))

    password = CharField(label='Şifrə', widget=PasswordInput(attrs={
        'placeholder' : 'Şifrə',
        'class'       : 'form-control',
        'type'        : 'password',
        'id'          : 'password',
    }))

    def clean(self):
        password = self.cleaned_data.get("password")

        if not password[0].isupper():
            raise forms.ValidationError({''})
