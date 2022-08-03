import React, { useState } from "react";
import { MapContainer, Marker, CircleMarker, Popup, Tooltip, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

var myIcon = L.icon({
    iconUrl: iconUrl.src,
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40]
});

function Map({ coordinates }) {
    var latLngsOr = [
        [41.2919,-96.0697],
        [41.1331,-104.7680],
        [43.6816,-114.3339],
        [45.5428,-122.6544]
    ]
    
    var optsOr = {
        color: 'red'
    }

    var latLngsCa = [
        [41.2919,-96.0697],
        [39.7644,-104.8548],
        [38.0075,-113.4316],
        [33.9991,-118.4117]
    ]

    var optsCa = {
        color: 'blue'
    }

    const [position, setPosition] = useState(coordinates);
    return (
      <MapContainer center={[38.737,-111.401]} zoom={5} scrollWheelZoom={false} style={{ height: "700px", width: "100%" }}>
         <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
         <CircleMarker center={[41.2919,-96.0697]} radius={5} pathOptions={{color: 'black', fillOpacity: 1, fillColor: 'white'}}>
            <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent className="bg-yellow">
               <span className="font-map text-xl">Omaha, NE</span>
            </Tooltip>
         </CircleMarker>
         <CircleMarker center={[41.1331,-104.7680]} radius={5} pathOptions={{color: 'red', fillOpacity: 1, fillColor: 'white'}}>
             <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
                <span className="font-map text-xl">Cheyenne, WY</span>
             </Tooltip>
         </CircleMarker>
         <CircleMarker center={[43.6816,-114.3339]} radius={5} pathOptions={{color: 'red', fillOpacity: 1, fillColor: 'white'}}>
             <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
                <span className="font-map text-xl">Sun Valley, ID</span>
             </Tooltip>
         </CircleMarker>
         <CircleMarker center={[38.0075,-113.4316]} radius={5} pathOptions={{color: 'blue', fillOpacity: 1, fillColor: 'white'}}>
             <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
                <span className="font-map text-xl">Lund, UT</span>
             </Tooltip>
         </CircleMarker>
         <CircleMarker center={[39.7644,-104.8548]} radius={5} pathOptions={{color: 'blue', fillOpacity: 1, fillColor: 'white'}}>
             <Tooltip direction="bottom" offset={[0, 10]} opacity={1} permanent>
                <span className="font-map text-xl">Denver, CO</span>
             </Tooltip>
         </CircleMarker>
         <CircleMarker center={[33.9991,-118.4117]} radius={5} pathOptions={{color: 'blue', fillOpacity: 1, fillColor: 'white'}}>
             <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
                <span className="font-map text-xl">Los Angeles, CA</span>
             </Tooltip>
         </CircleMarker>
         <CircleMarker center={[45.5428,-122.6544]} radius={5} pathOptions={{color: 'red', fillOpacity: 1, fillColor: 'white'}}>
             <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
                <span className="font-map text-xl">Portland, OR</span>
             </Tooltip>
         </CircleMarker>
         <Polyline positions={latLngsOr} pathOptions={optsOr} />
         <Polyline positions={latLngsCa} pathOptions={optsCa} />
      </MapContainer>
   );
}

export default Map;