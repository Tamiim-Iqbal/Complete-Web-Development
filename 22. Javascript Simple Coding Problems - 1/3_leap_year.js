function leapYear(year)
{
    if(year%4 === 0 && year%100 !== 0 || year%400 === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var year1 = leapYear(2000);
console.log(year1);                              //Output: true