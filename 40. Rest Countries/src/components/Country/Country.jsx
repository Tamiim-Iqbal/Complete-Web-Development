import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountry}) => {

    console.log(country);
    const {name, flags, population, area, cca2} = country;
    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
            setVisited(!visited)         //toggle
    }

    // console.log(handleVisitedCountry);

    return (
            <div className={`country ${visited && 'visited'}`}>
            <h2>{name?.common}</h2>
            
            <p>Population : {population}</p>
            <p>Area : {area} km<sup>2</sup></p>
            <p>Code : {cca2}</p>
            <img src={flags.png} alt="" />
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br /> <br />
            <button onClick={handleVisited}>{visited? 'Visited' : 'visited?'}</button>
            {
                visited && '    I have visited this country'
            }
        </div>
    );
};

export default Country;