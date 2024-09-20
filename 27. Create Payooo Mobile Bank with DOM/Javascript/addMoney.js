const btnAddMoney = document.getElementById('btn-add-money');
btnAddMoney.addEventListener("click", (event) => {
    event.preventDefault();
    // console.log("add money btn clicked");

    const inputAmount = document.getElementById('input-amount').value;
    // console.log(inputAmount);
    const amount = parseFloat(inputAmount);

    const pinNumber = document.getElementById('pin-number').value;

    if(inputAmount !== '' && pinNumber !== '')
    {
        // console.log("money added");

        let accountBalance = document.getElementById('account-balance').innerText;
        accountBalance = accountBalance.replace(/[^\d.-]/g, '');   // Remove any non-numeric characters (except for decimal points)
        const balance = parseFloat(accountBalance);
        // console.log(accountBalance);

        const updatedBalance = balance + amount;
        // console.log(updatedBalance);

        document.getElementById('account-balance').innerText = "$ "+ updatedBalance;

        // Alert:  
        const alertBox = document.getElementById('alert-box');
        alertBox.style.display = 'block';
        alertBox.style.backgroundColor = "#4caf50";
        alertBox.innerText = "Money added successfully!";
        
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 2000); // 2000 milliseconds = 2 seconds

        document.getElementById('input-amount').value = '';
        document.getElementById('pin-number').value = '';
    }
    else
    {
        alert("Please enter your Amount & Pin number!");
    } 
});