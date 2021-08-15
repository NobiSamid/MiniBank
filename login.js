document.getElementById('login-submit').addEventListener
('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;

    if(userEmail == 'beta@bap.com' && userPass == 'bolbona'){
        console.log('tor jonno taka r gach lagaisi')
        window.location.href = 'banking.html'
    }
    else{
        console.log('tui k?')
    }
});