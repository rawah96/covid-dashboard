import React, {useState, useEffect} from 'react'
import './Header.css'
import {FormControl, MenuItem, Select, CardContent, Card} from '@material-ui/core' 
import virus from './virus.svg';
import mask from './mask.svg'
import Stats from '../Stats/Stats'
import Table from '../Table/Table'
import Line from '../Charts/LineChart'
// will animate the svgs

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

    // to remember which one we selected
    const [country, setCountry] = useState('worldwide');
    const [countryInfo, setCountryInfo] = useState({});

    const  onCountryChange = async (e) => {
        const code = e.target.value; 
        setCountry(code);
        const url = code === 'worldwide' ? 'https://disease.sh/v3/covid-19/all'
        : `https://disease.sh/v3/covid-19/countries/${code}`

        // make the call - async
        await fetch(url)
        .then(res => res.json())
        .then(data => {
            setCountry(code)
            setCountryInfo(data);
        })
    }

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/all')
        .then(res => res.json())
        .then(data => setCountryInfo(data))
    },[])
    return (
        <>
        <div className="header">
            <div className="logo">
                <h2>COVID-19</h2>
                <img src={virus} width="6%"/> <img src={mask} width="6%"/></div>
            <FormControl className="app-dropdown">
            <Select
            variant="outlined"
            value={country}
            onChange={onCountryChange}
            >
                <MenuItem value="worldwide">Worldwide</MenuItem>
            {/* LOOP THROUGH all countries .. with state */}
                {countries.map(country => 
                    <MenuItem value={country.value}>{country.name}</MenuItem>    
                )}
            </Select>
        </FormControl>
        </div>
        <div className="app-stats">
            <Stats 
            title="Current"
            dailyCases={countryInfo.todayCases} 
            //total={countryInfo.cases}
            />
            <Stats 
            title="Recovered"
            dailyCases={countryInfo.todayRecovered}
            //total={countryInfo.recovered}
            />
            <Stats 
            title="Deaths"
            dailyCases={countryInfo.todayDeaths}
            //total={countryInfo.deaths}
            />            
            <Table />
        </div>
        <div className="line-chart">
                <Line />
        </div >
        </>
    )
}

export default Header
