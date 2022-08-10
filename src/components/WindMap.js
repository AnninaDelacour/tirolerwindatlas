import React, {useEffect, useRef, useState} from 'react';
import './windmap.css';
import mapboxgl from "mapbox-gl";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";


export default function WindMap() {

    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API;

    const mapContainer = React.createRef();
    const map = useRef(null);
    const [lng, setLng] = useState(11.4147);
    const [lat, setLat] = useState(47.1133);
    const [zoom, setZoom] = useState(8.5);


    useEffect(() => {
        if (map.current) return; //stops map from initializing more than once

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/anninae/cl6gopwnc000014mlja2wo6jh',
            center: [lng, lat],
            zoom: zoom
        });


        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });

        /*map.current.addControl(new StylesControl({
            styles: [
                {
                    label: 'Windatlas',
                    styleName: 'Windatlas',
                    styleUrl: 'mapbox://styles/anninae/cl6gopwnc000014mlja2wo6jh',
                },
                {
                    label: 'Satellite',
                    styleName: 'Satellite',
                    styleUrl: 'mapbox://styles/mapbox/satellite-v9',
                },
                {
                    label: 'Street',
                    styleName: 'Mapbox Streets',
                    styleUrl: 'mapbox://styles/mapbox/streets-v10',
                }
            ],
            onChange: (style) => {
                console.log(style);
            }
        }), 'top-right');*/





        map.current.on('load', () => {
            map.current.addSource('NP', {
                type: 'vector',
                url: 'mapbox://anninae.5q6uumc9'
                //Naturparke-7y3zov
            });
            map.current.addSource('SGG', {
                type: 'vector',
                url: 'mapbox://anninae.5i4ui9d1'
                //URP_Schigebietsgrenzen-563gi3
            });
            map.current.addSource('SU', {
                type: 'vector',
                url: 'mapbox://anninae.3c9t1gd6'
                //Schutzgebiete_Umwelt-6zbiqw
            });
            map.current.addSource('HSTRN', {
                type: 'vector',
                url: 'mapbox://anninae.d4w4ba22'
                //Hochrangiges_Strassennetz-d5ukem
            });
            map.current.addSource('VSG', {
                type: 'vector',
                url: 'mapbox://anninae.a2gik7ti'
                //Natura_2000_Vogelschutzrichtl-6g3vzy
            });
            map.current.addSource('FHF:L', {
                type: 'vector',
                url: 'mapbox://anninae.81a1lp95'
                //ORK_Freihaltefl_Landschaftlic-b4llbk
            });
            map.current.addSource('FHF:E', {
                type: 'vector',
                url: 'mapbox://anninae.1qpswj1m'
                //ORK_Freihaltefl_Erholungsraeu-9vzypg
            });
            map.current.addSource('FHF:F', {
                type: 'vector',
                url: 'mapbox://anninae.5grd41po'
                //ORK_Freihaltefl_Fortswirtscha-4rro3u
            });
            map.current.addSource('WSG', {
                type: 'vector',
                url: 'mapbox://anninae.cf4ihhwq'
                // Schutzgebiete_Wasser1-087uqk
            });
            map.current.addSource('ASH', {
                type: 'vector',
                url: 'mapbox://anninae.4a0jzv2t'
                //aufstiegshilfentirol_10-2020_-5xb61r
            });


            map.current.addLayer({
                id: 'NP',
                type: 'fill',
                source: 'NP',
                'source-layer': 'Naturparke-7y3zov',
                layout: {
                    visibility: 'none'
                },
                paint: {
                    'fill-color': "hsl(137, 83%, 42%)",
                    'fill-opacity': 0.69,
                    'fill-outline-color': "hsl(50, 93%, 57%)"
                },
            });
            map.current.addLayer({
                id: 'SGG',
                type: 'fill',
                source: 'SGG',
                'source-layer': 'URP_Schigebietsgrenzen-563gi3',
                layout: {
                    visibility: 'none'
                },
                paint: {
                    'fill-color': "hsl(210, 50%, 60%)",
                    'fill-opacity': 0.81,
                    'fill-outline-color': "hsl(341, 55%, 58%)"
                },
            });
            map.current.addLayer({
                id: 'ASH',
                type: 'line',
                source: 'ASH',
                'source-layer': 'aufstiegshilfentirol_10-2020_-5xb61r',
                layout: {
                    'visibility': 'none',
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                paint: {
                    'line-color': "hsl(341, 55%, 58%)",
                    'line-width': 3,
                    'line-dasharray': [0.1, 2]
                },
            });
            map.current.addLayer({
                id: 'SU',
                type: 'fill',
                source: 'SU',
                'source-layer': 'Schutzgebiete_Umwelt-6zbiqw',
                layout: {
                    visibility: 'none'
                },
                paint: {
                    'fill-color': "hsl(101, 63%, 41%)",
                    'fill-opacity': 0.69,
                    'fill-outline-color': "hsl(187, 61%, 81%)"
                },
            });
            map.current.addLayer({
                id: 'HSTRN',
                type: 'line',
                source: 'HSTRN',
                'source-layer': 'Hochrangiges_Strassennetz-d5ukem',
                layout: {
                    'visibility': 'none',
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                paint: {
                    'line-color': 'hsl(247, 38%, 48%)',
                    'line-width': 3,
                    'line-opacity': 1
                }
            });
            map.current.addLayer({
                id: 'VSG',
                type: 'fill',
                source: 'VSG',
                'source-layer': 'Natura_2000_Vogelschutzrichtl-6g3vzy',
                layout: {
                    visibility: 'none'
                },
                paint: {
                    'fill-color': "hsl(55, 64%, 76%)",
                    'fill-opacity': 0.75,
                    'fill-outline-color': "hsl(10, 72%, 68%)"
                },
            });
            map.current.addLayer({
                id: 'FHF:L',
                type: 'fill',
                source: 'FHF:L',
                'source-layer': 'ORK_Freihaltefl_Landschaftlic-b4llbk',
                layout: {
                    visibility: 'none'
                },
                paint: {
                    'fill-color': "hsl(170, 43%, 47%)",
                    'fill-opacity': 0.78,
                    'fill-outline-color': "hsl(129, 15%, 75%)"
                },
            });
            /*map.current.addLayer({
                id: 'FHF:E',
                type: 'fill',
                source: 'FHF:E',
                'source-layer': 'ORK_Freihaltefl_Erholungsraeu-9vzypg',
                layout: {
                    visibility: 'none'
                },
                paint: {
                    'fill-color': "hsl(40, 92%, 50%)",
                    'fill-opacity': 0.86,
                    'fill-outline-color': "hsl(80, 56%, 41%)"
                },
            });
            map.current.addLayer({
                id: 'FHF:F',
                type: 'fill',
                source: 'FHF:F',
                'source-layer': 'ORK_Freihaltefl_Fortswirtscha-4rro3u',
                layout: {
                    visibility: 'none'
                },
                paint: {
                    'fill-color': "hsl(80, 76%, 50%)",
                    'fill-opacity': 0.44,
                    'fill-outline-color': "hsl(23, 86%, 44%)"
                },
            });*/
            map.current.addLayer({
                id: 'WSG',
                type: 'fill',
                source: 'WSG',
                'source-layer': 'Schutzgebiete_Wasser1-087uqk',
                layout: {
                    visibility: 'none'
                },
                paint: {
                    'fill-color': "hsl(193, 85%, 46%)",
                    'fill-opacity': 0.75,
                    'fill-outline-color': "hsl(30, 77%, 70%)"
                },
            });


            map.current.on('idle', () => {
                // If these two layers were not added to the map, abort
                if (!map.current.getLayer('NP') || !map.current.getLayer('SGG')
                    || !map.current.getLayer('ASH') || !map.current.getLayer('SU')
                    || !map.current.getLayer('HSTRN') || !map.current.getLayer('VSG')
                    || !map.current.getLayer('FHF:L') || !map.current.getLayer('WSG')) {
                    return;
                }

                // Enumerate ids of the layers.
                const toggleableLayerIds = ['NP', 'SGG', 'ASH', 'SU', 'HSTRN', 'VSG', 'FHF:L', 'WSG'];

                // Set up the corresponding toggle button for each layer.
                for (const id of toggleableLayerIds) {
                    // Skip layers that already have a button set up.
                    if (document.getElementById(id)) {
                        continue;
                    }

                    // Create a link.
                    const button = document.createElement('button');
                    button.id = id;
                    button.href = '#';
                    button.textContent = id;
                    button.className = 'active';

                    // Show or hide layer when the toggle is clicked.
                    button.onclick = function (e) {
                        const clickedLayer = this.textContent;
                        e.preventDefault();
                        e.stopPropagation();

                        const visibility = map.current.getLayoutProperty(
                            clickedLayer,
                            'visibility'
                        );

                        // Toggle layer visibility by changing the layout object's visibility property.
                        if (visibility === 'visible') {
                            map.current.setLayoutProperty(clickedLayer, 'visibility', 'none');
                            this.className = '';
                        } else {
                            this.className = 'active';
                            map.current.setLayoutProperty(
                                clickedLayer,
                                'visibility',
                                'visible'
                            );
                        }
                    };

                    const layers = document.getElementById('layer-button');
                    layers.appendChild(button);
                }
            });
        });

    });

    return (
        <div>
            <div id="layer-button"/>
            <div ref={mapContainer} id="map"/>
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>

            <div className="legend">
                <div className="legend-header">
                    <h4>Legende</h4>
                </div>
                <div className="legend-text">
                    <Container>
                        <Row>
                            <Col>
                                <Row>
                                    <Col><strong>NP</strong> = Naturparks</Col>
                                </Row>

                                <Row>
                                    <Col><strong>SU</strong> = Schutzgebiete Umwelt</Col>
                                </Row>
                                <Row>
                                    <Col><strong>STRN</strong> = Hochrangiges Straßennetz</Col>
                                </Row>
                                <Row>
                                    <Col><strong>VSG</strong> = Vogelschutzgebiete (Natura 2000)</Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col><strong>ASH</strong> = Aufstiegshilfen</Col>
                                </Row>
                                <Row>
                                    <Col><strong>FHF:L</strong> = Freihaltefläche landschaftl. wertvoll</Col>
                                </Row>
                                <Row>
                                    <Col><strong>WSG</strong> = Wasserschutzgebiet</Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </div>
        </div>
    )
}

