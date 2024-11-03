import PropTypes from 'prop-types';
const Feature = ({feature}) => {
    return (
        <div>
            <p>{feature}</p>
        </div>
    );
};

Feature.prototypes = {
    feature: PropTypes.string.isRequired
    }
export default Feature;