import React from 'react'
import './Worldmap.css'
import {Map, TileLayer} from "react-leaflet";
import {showDataOnMap} from '../Table/util.js'
function Worldmap({countries, casesType, center, zoom}) {
    return (
        <div className="world-map">
            <Map center={center} zoom={zoom}>
            <TileLayer 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Loop through countries & draw circles on the map */}
            {showDataOnMap(countries, casesType)}
            </Map>
        </div>
    )
}

export default Worldmap
