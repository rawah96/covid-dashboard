import React, {useState, useEffect} from 'react'
import './Table.css'
import {sortData} from './util'
function Table() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const getCountriesData = async () => {
        const url='https://disease.sh/v3/covid-19/countries';
        fetch(url)
        .then(res => res.json())
        .then(data => {
            const countries = data.map(country => (
                {
                    name: country.country,
                    value:country.countryInfo.iso2,
                }
            ));
            const sortedData = sortData(data);
            setTableData(sortedData);
        }
            )
    }
    getCountriesData();
    }, []);

    return (
        <div className="test">
        <div className="table">
        <h1 className="th">Cases by Country </h1>
        <br/>
        <tr>
            <td>Country</td>
            <td>Cases</td>
            <br/>
            <br/>
        </tr>
            {tableData.map(country => (
                <tr>
                    <td>{country.country}</td>
                    <td>{country.cases}</td>
                </tr>
            ))}
        </div>
        </div>
    )
}

export default Table
