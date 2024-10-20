import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountry = (country) =>
    {
        // console.log("Button Clicked");
        // console.log(country);
        // console.log(country.name.common);
        const newVisitedCountry = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountry)
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
                <h4>Visited Countries : {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <p key={country.cca3}>{country.name.common}</p>)
                    }
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