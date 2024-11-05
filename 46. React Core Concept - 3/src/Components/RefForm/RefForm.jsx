import { useEffect } from "react";
import { useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);

    useEffect(()=> {
        nameRef.current.focus();
    }, [])

const handleSubmit = e => {
    e.preventDefault()
    console.log(nameRef.current.value)
    console.log(emailRef.current.value)
    console.log(passRef.current.value)
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} defaultValue={"Human"}  type="text" name="name" id=""/>
                <br />
                <input ref={emailRef} type="email" name="email" id="" />
                <br />
                <input ref={passRef} type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit"/>
                
            </form>
        </div>
    );
};

export default RefForm;