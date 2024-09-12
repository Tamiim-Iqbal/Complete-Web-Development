function  waitingTime(waitingTimes  , serialNumber)
{
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number")
    {
        return "Invalid Input";
    }
    let totalTime = 0;
    for (let time of waitingTimes)
    {
        totalTime += time;
    }
    let avgTime = Math.round(totalTime/waitingTimes.length);
    let serial = serialNumber - waitingTimes.length - 1;
    
    return avgTime * serial;
};

let result = waitingTime([ 3, 5, 7, 11, 6 ], 10);
console.log(result);