const btnLogin = document.getElementById('btn-login');
btnLogin.addEventListener('click', (event) => {

        event.preventDefault();                   

        const phoneNumber = getValue('phone-number');
        const pinNumber = getValue('pin');

        const home = getElementById('home-section');
        const showLogin = getElementById('login-section');

        if(phoneNumber !== '' && pinNumber !== '')
        {
            home.style.display = 'block';
            showLogin.style.display = 'none';

            //Alert
            const alertBox = getElementById('alert-box');
            alertBox.style.display = 'block';
            alertBox.style.backgroundColor = "#4caf50";
            alertBox.innerText = "Login successful!";
            setTimeout(() => {
            alertBox.style.display = 'none';
            }, 2000); 
        }
        else
        {
             // Alert
             const alertBox = getElementById('alert-box');
             alertBox.style.display = 'block';
             alertBox.style.backgroundColor = "#f44336";
             alertBox.innerText = "Please enter your Phone & Pin number!";
             setTimeout(() => {
                 alertBox.style.display = 'none';
             }, 2000); 
        }
});

const forgetPass = getElementById('forget-pass');
forgetPass.addEventListener ("click", () => {

    //Alert
    const alertBox = getElementById('alert-box');
    alertBox.style.display = 'block';
    alertBox.style.backgroundColor = "#f44336";
    alertBox.innerText = "Muri kha!"
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 2000);
});
