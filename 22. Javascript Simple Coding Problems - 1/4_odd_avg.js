function oddAvg(numbers)
{
    let sum = 0;
    let count = 0;
    for (const num of numbers)
    {
        if(num %2 === 1)
        {
            sum += num;
            count++;
        }
    }
    const avg = sum / count;
    return avg;
}
const average = oddAvg([1, 2, 3, 4, 5, 6, 7]);
console.log(average);