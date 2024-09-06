function inchToFeet (inch)
{
    const feet = parseInt(inch/12);
    const fracInch = inch % 12;
    const result = `${feet} ft ${fracInch} inch.`
    return result;
}
const height = inchToFeet(75);
console.log(height);