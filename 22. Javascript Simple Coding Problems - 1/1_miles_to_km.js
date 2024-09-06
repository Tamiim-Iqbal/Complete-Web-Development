//1 mile =  1.60934 km

function milesToKm(mile)
{
    const km = mile * 1.60934;
    return km;
}

const km = milesToKm(68);
console.log(km);