// step 1: adding event listener on 'submit' button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step 2: get the email address from email input field
    const emailField = document.getElementById('user-email');
    const emailText = emailField.value;

    // step 3: get the password from password input field
    const passwordField = document.getElementById('user-password');
    const passwordText = passwordField.value;

    // step 4: verifying log-in credentials
    if(emailText == 'sayed91515@gmail.com' && passwordText == 'sayed8901'){
        // step 5: link to the bank.html page
        location.href = 'bank.html';
    }
    else{
        alert('Please provide valid log_in credentials!');
    }
})