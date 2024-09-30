function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}
function displayUsers(users)
{
    // console.log(users);
    const ul = document.getElementById('user-list');
    for (const user of users)
    {
        // console.log(user);
        // console.log(user.email);
        // console.log(user.username);

        const li = document.createElement('li');
        li.innerHTML = user.username;
        ul.appendChild(li);  
    }
}
