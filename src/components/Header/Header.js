import React, {useState, useEffect} from 'react'
import './Header.css'
import {FormControl, MenuItem, Select} from '@material-ui/core' 

function Header() {
    // state = variable in react.. 
    const [countries, setCountries] = useState([]);
    // end point = https://disease.sh/v3/covid-19/countries
    // useEffect => runs a piece of code based on a given condition
    useEffect(() => {
        // code inside here will run once one the component loads (if [] is empty), and will not run again after.. 
        // if there was a variable in [], it will run when the variable changes..

        // async => send req, wait for it, do something.. 
        // useEffect write internal function
        const getCountriesData = async() => {
            const url = 'https://disease.sh/v3/covid-19/countries'
            await fetch(url)
            .then(res => res.json())
            .then(data => {
                const countries = data.map(country => ({
                    name: country.country,
                    value: country.countryInfo.iso2
                }));
                setCountries(countries);
            });
        }
        // call the function
        getCountriesData();
    }, []); // [] is the condition

    return (
        <div className="header">
            <h2>COVID-19</h2>
            <FormControl className="app-dropdown">
            <Select
            variant="outlined"
            value=""
            >
            {/* LOOP THROUGH all countries .. with state */}
            {countries.map(country => 
                <MenuItem value={country.value}>{country.name}</MenuItem>    
            )}
            </Select>
        </FormControl>
        </div>
    )
}

export default Header
