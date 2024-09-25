// All Elements
const donationBtnEl = document.getElementById('donation-btn');
const historyBtnEl = document.getElementById('history-btn');

const mainSectionEl = document.getElementById('main-section');
const historySectionEl = document.getElementById('history-section');

const myBalanceEl = document.getElementById('my-balance').innerText;
let myBalance = typeInt(myBalanceEl);

// Common Functions
function typeInt(x)
{
    let value = parseInt(x);
    return value;
}
function modal()
{
    document.getElementById('my-modal').showModal();
}
function history(input, p)
{
    const time = new Date();
    document.getElementById('history-list').innerHTML += 
    `
    <li class="border rounded-xl p-5 lg:py-5 lg:px-7 mb-6">
        <h2 class="text-base lg:text-lg font-semibold">${input} Taka is Donated for ${p}</h2>
        <p class="date-time text-sm lg:text-base mt-2 lg:mt-3 text-secondary">
        Date : ${time}
        </p>
    </li>
    `
}

historyBtnEl.addEventListener('click', () => {
    mainSectionEl.style.display = 'none';
    historySectionEl.style.display = 'block';
    
    document.getElementById('history-btn').style.backgroundColor = '#B4F461';
    document.getElementById('donation-btn').style.backgroundColor = 'white';

})


donationBtnEl.addEventListener('click', () => {
    historySectionEl.style.display = 'none';
    mainSectionEl.style.display = 'block';
    
    document.getElementById('history-btn').style.backgroundColor = 'white';
    document.getElementById('donation-btn').style.backgroundColor = '#B4F461';
})


// Noakhali 
const noakhaliBalanceEl = document.getElementById('noakhali-balance').innerText;
let noakhaliBalance = typeInt(noakhaliBalanceEl);

const noakhaliBtnEl = document.getElementById('noakhali-btn');

noakhaliBtnEl.addEventListener('click', () => {
    // console.log("noakhali btn clicked");
    const noakhaliInputEl = document.getElementById('noakhali-input').value;

    if(noakhaliInputEl === "" || isNaN(noakhaliInputEl))
    {
        alert("Enter Valid Amount");
        return
    }

    const noakhaliInput = typeInt(noakhaliInputEl);

    if(noakhaliInput < 1)
    {
        alert("Enter valid amount!");
        return;
    }

    if(noakhaliInput > myBalance)
    {
        alert("Not enough money!")
        return;
    }
    
    const myNewBalance = myBalance - noakhaliInput;
    const noakhaliNewBalance = noakhaliBalance + noakhaliInput;

    const p = "Flood Rescue at Noakhali, Bangladesh";

    myBalance = myNewBalance;
    noakhaliBalance = noakhaliNewBalance;
    document.getElementById('my-balance').innerText = myNewBalance;
    document.getElementById('noakhali-balance').innerText = noakhaliNewBalance;
    modal();
    history(noakhaliInput,p);
});


// Feni
const feniBalanceEl = document.getElementById('feni-balance').innerText;
let feniBalance = typeInt(feniBalanceEl);

const feniBtnEl = document.getElementById('feni-btn');

feniBtnEl.addEventListener('click', () => {
    // console.log("feni btn clicked");
    const feniInputEl = document.getElementById('feni-input').value;

    if(feniInputEl === "" || isNaN(feniInputEl))
    {
        alert("Enter Valid Amount");
        return
    }

    const feniInput = typeInt(feniInputEl);

    if(feniInput < 1)
    {
        alert("Enter valid amount!");
        return;
    }

    if(feniInput > myBalance)
    {
        alert("Not enough money!")
        return;
    }
    
    const myNewBalance = myBalance - feniInput;
    const feniNewBalance = feniBalance + feniInput;

    const p = "Flood Relief at Feni, Bangladesh";

    myBalance = myNewBalance;
    feniBalance = feniNewBalance;
    document.getElementById('my-balance').innerText = myNewBalance;
    document.getElementById('feni-balance').innerText = feniNewBalance;
    modal();
    history(feniInput,p);
});


// Quota 
const quotaBalanceEl = document.getElementById('quota-balance').innerText;
let quotaBalance = typeInt(quotaBalanceEl);

const quotaBtnEl = document.getElementById('quota-btn');

quotaBtnEl.addEventListener('click', () => {
    // console.log("quota btn clicked");
    const quotaInputEl = document.getElementById('quota-input').value;

    if(quotaInputEl === "" || isNaN(quotaInputEl))
    {
        alert("Enter Valid Amount");
        return
    }

    const quotaInput = typeInt(quotaInputEl);

    if(quotaInput < 1)
    {
        alert("Enter valid amount!");
        return;
    }

    if(quotaInput > myBalance)
    {
        alert("Not enough money!")
        return;
    }
    
    const myNewBalance = myBalance - quotaInput;
    const quotaNewBalance = quotaBalance + quotaInput;

    const p = "Aid for Injured in The Quota Movement, Bangladesh";

    myBalance = myNewBalance;
    quotaBalance = quotaNewBalance;
    document.getElementById('my-balance').innerText = myNewBalance;
    document.getElementById('quota-balance').innerText = quotaNewBalance;
    modal();
    history(quotaInput,p);
});