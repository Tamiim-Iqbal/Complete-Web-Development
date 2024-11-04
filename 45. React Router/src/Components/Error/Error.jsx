import { Link,  useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h2>Ops!!</h2>
            <p>{error.statusText || error.message}</p>
            <Link to="/"><button>Home</button></Link>
        </div>
    );
};

export default Error;