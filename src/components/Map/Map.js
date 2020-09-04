import React, {useState, useEffect} from 'react'
import './Map.css'
import ReactDOM from 'react-dom';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

//Import FusionMaps
import FusionMaps from 'fusioncharts/maps/es/fusioncharts.world';
import World from 'fusioncharts/fusioncharts.maps'

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FusionCharts, FusionMaps, World, FusionTheme);



function Map() {
    const [continents, setContinents] = useState([]);
  useEffect(() => {
    const getCountriesData = async() => {
      const url = 'https://disease.sh/v3/covid-19/continents'
      await fetch(url)
      .then(res => res.json())
      .then(data => {
          /*const countries = data.map(country => ({
              name: country.country,
              value: country.countryInfo.iso2
          }));*/
          //countries.map(e => console.log(e.value))

          setContinents(data)
      });
  }
  // call the function
  getCountriesData();
}, []);


const arr = continents.map(e => e.cases);

/*
0: 7504662 --> NA
1: 6533107 --> SA
2: 7409280 --> Asia
3: 3682636 --> EUROPE
4: 1281074 --> AFRICA
5: 28953 --> AUSTRALIA
*/

const dataset = [
{
    "id": "NA",
    "value": arr[0],
    "showLabel": "1"
}, {
    "id": "SA",
    "value": arr[1],
    "showLabel": "1"
}, {
    "id": "AS",
    "value": arr[2],
    "showLabel": "1"
}, {
    "id": "EU",
    "value": arr[3],
    "showLabel": "1"
}, {
    "id": "AF",
    "value": arr[4],
    "showLabel": "1"
}, {
    "id": "AU",
    "value": arr[5],
    "showLabel": "1"
}
];

const colorrange = {
    "minvalue": "0",
    "code": "#FFE0B2",
    "gradient": "1",
    "color": [{
        "minvalue": "28.95",
        "maxvalue": "1.28",
        "color": "#FFD74D"
    }, {
        "minvalue": "3.68",
        "maxvalue": "6.53",
        "color": "#FB8C00"
    }, {
        "minvalue": "7.41",
        "maxvalue": "7.5",
        "color": "#E65100"
    }]
};

// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: 'world', // The chart type
    width: '1000', // Width of the chart
    height: '600', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
        // Map Configuration
        "chart": {
            "caption": "COVID-19 SPREAD",
            "subcaption": "2019-2020",
            "includevalueinlabels": "1",
            "labelsepchar": ": ",
            "entityFillHoverColor": "#FFF9C4",
            "theme": "fusion"
        },
        // Aesthetics; ranges synced with the slider
        "colorrange": colorrange,
        // Source data as JSON --> id represents countries of the world.
        "data": dataset
    }
}

    return (
        <div className="map">
                 <ReactFC {
                     ...chartConfigs
                 }/>
           
            
        </div>
    )
}

export default Map
