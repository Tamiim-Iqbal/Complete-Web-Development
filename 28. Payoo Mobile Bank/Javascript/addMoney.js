
const btnAddMoney = getElementById('btn-add-money');
btnAddMoney.addEventListener("click", (event) => {

    event.preventDefault();

    const amount = getValueParseFloat('input-amount');
    const pinNumber = getValue('pin-number');

    if(isNaN(amount))
    {
        const alertBox = getElementById('alert-box');
        alertBox.style.display = 'block';
        alertBox.style.backgroundColor = "#f44336";
        alertBox.innerText = "Failed to Add Money!";
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 4000); 
        
        return;
    }

    if(amount !== '' && pinNumber !== '')
    {
        let balance = getInnerTextParseFloat('account-balance');
        const updatedBalance = balance + amount;

        document.getElementById('account-balance').innerText = "$ "+ updatedBalance;

        const p = document.createElement('p');
        p.style.backgroundColor = "#4caf50";
        p.style.padding = "3px 5px";
        p.style.fontSize = "14px"
        p.style.marginTop = "7px";
        p.style.borderRadius = "10px";
        p.style.color = "white";

        p.innerHTML = `$ ${amount} has been deposited. Balance $ ${updatedBalance}`;
        document.getElementById('show-transaction').appendChild(p);

        // Alert:  
        const alertBox = getElementById('alert-box');
        alertBox.style.display = 'block';
        alertBox.style.backgroundColor = "#4caf50";
        alertBox.innerText = "Money added successfully!";
        
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 2000);

        document.getElementById('input-amount').value = '';
        document.getElementById('pin-number').value = '';
    }
    else
    {
        // Alert
        const alertBox = getElementById('alert-box');
        alertBox.style.display = 'block';
        alertBox.style.backgroundColor = "#f44336";
        alertBox.innerText = "Please enter your Amount & Pin number!";
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 2000); 
    } 
});