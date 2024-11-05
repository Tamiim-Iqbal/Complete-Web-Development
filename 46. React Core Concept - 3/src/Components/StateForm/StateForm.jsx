import { useState } from "react";

const StateForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6)
        {
            setError('Password must be 6 charecters or longer')
        }
        else{
            setError('')
            console.log(name, email, password)
    }

    const handleName = e => 
        {
            // console.log(e.target.value);
            setName(e.target.value);
        }
    const handleEmail = e => 
    {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePassword = e => 
        {
            // console.log(e.target.value);
            setPassword(e.target.value);
        }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name}
                    onChange={handleName}
                type="text" name="name" id=""/>
                <br />
                <input 
                    onChange={handleEmail}
                 type="email" name="email" id="" />
                <br />
                <input
                    onChange={handlePassword}
                type="password" name="password" id="" required/>
                <br />
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateForm;