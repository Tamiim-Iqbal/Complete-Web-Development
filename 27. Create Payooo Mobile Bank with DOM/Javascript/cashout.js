const btnCashout = document.getElementById('btn-cash-out');
btnCashout.addEventListener("click", (e) => {
    // console.log("Cashout button clicked");
    e.preventDefault();

    let inputCashout = document.getElementById('input-cashout').value;
    // console.log(inputCashout);
    const cashout = parseFloat(inputCashout);
    
    const pinCashout = document.getElementById(('pin-cashout')).value;
    // console.log(pinCashout);

    if (inputCashout !== '' && pinCashout !== '')
    {
        // console.log('Cashout Done');
        let accountBalance = document.getElementById('account-balance').innerText;
        accountBalance = accountBalance.replace(/[^\d.-]/g, '');   // Remove any non-numeric characters (except for decimal points)
        // console.log(accountBalance);

        const balance = parseFloat(accountBalance);
        // console.log(balance);

        const newBalance = balance - cashout;
        // console.log(newBalance);

        if(newBalance >= 0)
        {
            document.getElementById('account-balance').innerText = "$ "+ newBalance;
            // Alert:  
            const alertBox = document.getElementById('alert-box');
            alertBox.style.display = 'block';
            alertBox.style.backgroundColor = "#4caf50";
            alertBox.innerText = "Cashout successful!"
            setTimeout(() => {
                alertBox.style.display = 'none';
            }, 2000); // 2000 milliseconds = 2 seconds
        }
        else
        {
            const alertBox = document.getElementById('alert-box');
            alertBox.style.display = 'block';
            alertBox.style.backgroundColor = "#f44336";
            alertBox.innerText = "Not enough money!";
            setTimeout(() => {
                alertBox.style.display = 'none';
            }, 2000); // 2000 milliseconds = 2 seconds
        }

        document.getElementById('input-cashout').value = '';
        document.getElementById('pin-cashout').value = '';
    }
    else
    {
        alert("Please enter your Amount & Pin number");
    }
})