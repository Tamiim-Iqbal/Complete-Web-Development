import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li className='hover:bg-yellow-500'> 
            <a href={route.path}></a>{route.name}
            </li>
    );
};

Link.prototypes = {
route: PropTypes.object.isRequired
}

export default Link;