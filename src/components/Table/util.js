import React from 'react'
import numeral from 'numeral';
import {Circle, Popup} from 'react-leaflet';

export const sortData = data => {
    // copy data into array
    const sortedData = [...data];

    // grabs first data and calls it a, then second and calls it b
    sortedData.sort((a,b) => {
        if(a.cases > b.cases) {
            return -1;
        } else {
            return 1;
        }
    })
    return sortedData;
}

const casesTypeColors ={
    cases: {
        hex: "#CC1034",
        multiplier:800
    },
    recovered: {
        hex: "#7dd71d",
        multipier:1200,
    },
    deaths: {
        hex: "#fb4443",
        multipier:2000
    }
}

export const showDataOnMap = (data, casesType='cases') => {
    data.map(country => (
        <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}  
            color={casesTypeColors[casesType].hex}
            radius={
                Math.sqrt(country[casesType]) * casesTypeColors[casesType].multipier
            }  
        >
            <Popup>
                <h1>i'm a popup!</h1>
            </Popup>

        </Circle>
    ))
};