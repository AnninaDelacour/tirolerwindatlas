import React, {useEffect, useRef, useState} from 'react';
import maplibregl from 'maplibre-gl';
import './windmap.css';
import mapboxgl from "mapbox-gl";
import ReactMapGL from 'react-map-gl';

export default function WindMap () {

    const mapContainer = React.createRef();
    const map = useRef(null);
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API;

    useEffect(() => {
        if (map.current) return; //stops map from initializing more than once

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/satellite-v9',
            center: [11, 49],
            zoom: 9,
        });


    });

    return (
        <div>
            <div className="mapContainer" ref={mapContainer} />
        </div>
    )
}