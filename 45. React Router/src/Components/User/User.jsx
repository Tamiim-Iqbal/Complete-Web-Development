import { Link, useNavigate } from 'react-router-dom';
const User = ({user}) => {
const {id, name, email, phone} = user;

const navigate = useNavigate();

const userStyle  = {
    border: '2px solid yellow',
    padding: '10px',
    borderRadius : '20px'
}
    const handleShowDetail = () => {
        navigate(`/user/${id}`)
    }

    return (
        <div style={userStyle}>
            <h2>{id}</h2>
            <h3>{name}</h3>
            <p>email : {email}</p>
            <p>phone : {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            {/* <Link to={`/user/${id}`}>
                <button>Click Me</button>
            </Link> */}
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default User;