const btnAdd = document.getElementById('btn-addmoney');
const btnOut = document.getElementById('btn-cashout');

const hideAddmoney = document.getElementById('hide-addmoney');
const hideAddmoneyCard = document.getElementById('hide-addmoney-card');


const hideCashout = document.getElementById('hide-cashout');
const hideCashoutCard = document.getElementById('hide-cashout-card');

btnAdd.addEventListener("click", () => {
   
    hideCashout.style.display = 'none';
    hideCashoutCard.style.display = 'none';

    hideAddmoney.style.display = 'block';
    hideAddmoneyCard.style.display = 'block';

});

btnOut.addEventListener("click", () => {

    hideAddmoney.style.display = 'none';
    hideAddmoneyCard.style.display = 'none';

    hideCashout.style.display = 'block';
    hideCashoutCard.style.display = 'block';
});


