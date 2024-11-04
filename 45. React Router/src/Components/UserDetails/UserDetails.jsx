import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {id, name, website} = user;

    const navigate = useNavigate();
    const {userId} = useParams();
    console.log(userId)

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h2>Id : {id}</h2>
            <h2>Name: {name}</h2>
            <p>Website : {website}</p>
            <button onClick={handleBack}>Back</button>
        </div>
    );
};

export default UserDetails;