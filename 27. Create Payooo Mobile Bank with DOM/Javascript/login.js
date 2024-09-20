//  console.log("Hello!");

document.getElementById('btn-login')
    .addEventListener('click', (event) => {
        event.preventDefault();                   // prevent reloading the page
        // console.log("Login button clicked!");

        const phoneNumber = document.getElementById('phone-number').value;
        console.log(phoneNumber);

        const pinNumber = document.getElementById('pin').value;
        console.log(pinNumber);

        const home = document.getElementById('home-section');
        const hideLogin = document.getElementById('login-section');

        // temporary uses
        if(phoneNumber !== '' && pinNumber !== '')
        {
            console.log("You are logged in");
            home.style.display = 'block';
            
            hideLogin.style.display = 'none';

            //Alert
            const alertBox = document.getElementById('alert-box');
            alertBox.style.display = 'block';
            alertBox.style.backgroundColor = "#4caf50";
            alertBox.innerText = "Login successful!";
            setTimeout(() => {
            alertBox.style.display = 'none';
            }, 2000); // 2000 milliseconds = 2 seconds
        }
        else
        {
            alert("Please enter your Phone & Pin number!");
        }
});

const forgetPass = document.getElementById('forget-pass');
forgetPass.addEventListener ("click", () => {

    //Alert
    const alertBox = document.getElementById('alert-box');
    alertBox.style.display = 'block';
    alertBox.style.backgroundColor = "#f44336";
    alertBox.innerText = "Muri kha!"
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 2000);
})
