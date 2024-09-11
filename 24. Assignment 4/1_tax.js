function calculateTax(income, expenses)
{
    if (income < 0 || expenses < 0 || expenses > income)
    {
        return "Invalid Input";
    }
    let money = income - expenses;
    let result = money * .20;
    return result;
}

const ans = calculateTax(10000, 7000);
console.log(ans);
