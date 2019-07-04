'use-strict'

function validateForm(evt) {
    evt.preventDefault();
    var email = document.forms['login-form']['input-email'].value;
    var password = document.forms['login-form']['input-password'].value;
    var success = document.getElementById('alert__js--success');
    var error = document.getElementById('alert__js--error');

    if (!validateEmail(email) || password == '') {
        error.classList.add('alert--display');
        success.classList.remove('alert--display');
    } else {
        error.classList.remove('alert--display');
        success.classList.add('alert--display');
    };    
};

function validateEmail(mailToTest) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mailToTest);
};


