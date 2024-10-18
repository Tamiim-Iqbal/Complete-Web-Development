import './User.css'
export default function User({user}){

    // console.log(user)
    const {name, email} = user;
    return (
        <div className='box2'>
            <h4>Name : {name}</h4>
            <p>Email : {email}</p>
        </div>
    )

}