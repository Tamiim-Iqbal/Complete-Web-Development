function calculateFinalScore(obj)
{
    let name = obj.name;
    let testScore = obj.testScore;
    let schoolGrade = obj.schoolGrade;
    let isFFamily = obj.isFFamily;

    if(typeof obj !== "object" || typeof name !== "string" || typeof testScore !== "number" || testScore > 50 || typeof schoolGrade !== "number" || schoolGrade > 30 || typeof isFFamily !== "boolean")
    {
        return "Invalid Input";
    }

    let totalScore = testScore + schoolGrade;

    if(isFFamily)
    {
        totalScore += 20;
    }

    return totalScore >= 80;
};

let ans = calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true});
console.log(ans);