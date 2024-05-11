// form-panel-activation
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// signIn signUp validation
function validateSignUpForm() {
    var username = document.getElementById('signUpUsername').value;
    var email = document.getElementById('signUpEmail').value;
    var password = document.getElementById('signUpPassword').value;
    var reEnterPassword = document.getElementById('signUpRePassword').value;
    var isValid = true;

    if (!username) {
        document.getElementById('signUpUsernameError').textContent = 'Username is required';
        isValid = false;
    } else if (!isNaN(username)) {
        document.getElementById('signUpUsernameError').textContent = 'Username cannot contain numbers';
        isValid = false;
    } else {
        document.getElementById('signUpUsernameError').textContent = '';
    }

    if (!email) {
        document.getElementById('signUpEmailError').textContent = 'Email is required';
        isValid = false;
    } else {
        document.getElementById('signUpEmailError').textContent = '';
    }

    if (!password) {
        document.getElementById('signUpPasswordError').textContent = 'Password is required';
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById('signUpPasswordError').textContent = 'Password must be at least 8 characters long';
        isValid = false;
    } else {
        document.getElementById('signUpPasswordError').textContent = '';
    }

    if (!reEnterPassword) {
        document.getElementById('signUpRePasswordError').textContent = 'Please re-enter your password';
        isValid = false;
    } else if (password !== reEnterPassword) {
        document.getElementById('signUpRePasswordError').textContent = 'Passwords do not match';
        isValid = false;
    } else {
        document.getElementById('signUpRePasswordError').textContent = '';
    }

    return isValid;
}

function validateSignInForm() {
    var username = document.getElementById('signInUsername').value;
    var email = document.getElementById('signInEmail').value;
    var password = document.getElementById('signInPassword').value;
    var isValid = true;

    if (!username) {
        document.getElementById('signInUsernameError').textContent = 'Username is required';
        isValid = false;
    } else if (!isNaN(username)) {
        document.getElementById('signInUsernameError').textContent = 'Username cannot contain numbers';
        isValid = false;
    } else {
        document.getElementById('signInUsernameError').textContent = '';
    }

    if (!email) {
        document.getElementById('signInEmailError').textContent = 'Email is required';
        isValid = false;
    } else {
        document.getElementById('signInEmailError').textContent = '';
    }

    if (!password) {
        document.getElementById('signInPasswordError').textContent = 'Password is required';
        isValid = false;
    } else {
        document.getElementById('signInPasswordError').textContent = '';
    }

    return isValid;
}

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    if (!validateSignUpForm()) {
        event.preventDefault();
    }
});

document.getElementById('signInForm').addEventListener('submit', function(event) {
    if (!validateSignInForm()) {
        event.preventDefault();
    }
});

document.getElementById('signIn').addEventListener('click', function() {
    document.getElementById('container').classList.remove('right-panel-active');
});

document.getElementById('signUp').addEventListener('click', function() {
    document.getElementById('container').classList.add('right-panel-active');
});