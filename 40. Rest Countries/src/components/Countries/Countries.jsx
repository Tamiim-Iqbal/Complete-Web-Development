import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountry = (country) =>
    {
        console.log('add : ');
        console.log(country);
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data =>setCountries(data))
    }, [])

    return (
        
        <div>
            <h2>Countries : {countries.length}</h2>
            <div>
                <h4>Visited Countries : </h4>
                <ul>

                </ul>
            </div>
            <div className="country-container">
            {
                countries.map(country => <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;