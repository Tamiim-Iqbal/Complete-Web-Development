import useInputState from "../Components/Hooks/Hooks";

const HookForm = () => {
    
    // const [name, HandleNameChange] = useInputState('');
    const nameState = useInputState('')

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameState.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={HandleNameChange} type="text" name="name" id=""/> */}
                <input {...nameState} type="text" name="name" id=""/>
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="" id="" />
                <br />
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default HookForm;