function removeDuplicate(array)
{
    const unique = [];
    for(const item of array)
    {
        if(unique.includes(item) === false)
        {
            unique.push(item);
        }
    }
    return unique;
}

const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];
const uniqueArray = removeDuplicate(numbers);
console.log(uniqueArray);