function sendNotification(email)
{
    let msg = email;
    if (msg.indexOf("@") === -1)
    {
        return "Invalid Email";
    }
    let ans = msg.replace("@", " sent you an email from ");
    return ans;
    
};

let ans = sendNotification("zihad@gmail.com");
console.log(ans);