const btnAdd = getElementById('btn-addmoney');
const btnOut = getElementById('btn-cashout');
const btnTran = getElementById('btn-transaction');

const showAddmoney = getElementById('show-addmoney');
const showAddmoneyCard = getElementById('show-addmoney-card');
const showTransaction = getElementById('show-transaction');
const showTran = getElementById('show-tran');

const showCashout = getElementById('show-cashout');
const showCashoutCard = getElementById('show-cashout-card');

btnAdd.addEventListener("click", () => {
   
    showCashout.style.display = 'none';
    showCashoutCard.style.display = 'none';
    showTransaction.style.display = 'none';
    showTran.style.display = 'none';

    showAddmoney.style.display = 'block';
    showAddmoneyCard.style.display = 'block';

});

btnOut.addEventListener("click", () => {

    showAddmoney.style.display = 'none';
    showAddmoneyCard.style.display = 'none';
    showTransaction.style.display = 'none';
    showTran.style.display = 'none';

    showCashout.style.display = 'block';
    showCashoutCard.style.display = 'block';
});

btnTran.addEventListener("click", () => {
    showAddmoney.style.display = 'none';
    showAddmoneyCard.style.display = 'none';
    showCashout.style.display = 'none';
    showCashoutCard.style.display = 'none';

    showTransaction.style.display ='block';
    showTran.style.display ='block';
    
})

