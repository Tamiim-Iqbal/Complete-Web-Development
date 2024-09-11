function checkDigitsInName(name) 
{
    if (typeof name !== "string")
    {
        return "Invalid Input";
    }
    for (let char of name)
    {
        if(!isNaN(char))
        {
            return true;
        }
    }
    return false;
};

let ans = checkDigitsInName("Raj123");
console.log(ans);

