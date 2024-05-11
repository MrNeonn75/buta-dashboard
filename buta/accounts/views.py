from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

def signin_up(request):
    # Sign up
    sign_up_username = request.POST.get('sign_up_username')
    sign_up_email = request.POST.get('sign_up_email')
    sign_up_password = request.POST.get('sign_up_password')
    sign_up_repassword = request.POST.get('sign_up_password')
    
    # Sing in
    sign_in_username = request.POST.get('sign_in_username')
    sign_in_password = request.POST.get('sign_in_password')
    
    error = ''
    
    if (sign_up_username is not None and sign_in_username is None):
        try:
            if (sign_up_password == sign_up_repassword):
                user = User.objects.create_user(
                    username=sign_up_username,
                    email=sign_up_email,
                    password=sign_up_password
                )
                
                if(user.is_active):
                    login(request, user)
                    return redirect('index')
                else:
                    error = 'Disabled account'
            else:
                error = 'Your password is incorrect.'
        except Exception as ex:
            error = f"User can't be created: {ex}"
    else:
        try:
            user = authenticate(username=sign_in_username, password=sign_in_password)
            if(user is not None):
                if(user.is_active):
                    login(request, user)
                    return redirect('index')
                else:
                    error = 'Disabled account'
            else:
                error = 'Invalid login'
        except Exception as ex:
            error = f"Can't login: {ex}"
    
    data = {
        'error' : error
    }
    return render(request, 'signIn-up.html', data)

def exit(request):
    if(request.user.is_authenticated):
        logout(request)
        return redirect('index')
