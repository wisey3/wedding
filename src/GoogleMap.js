import React, { useState } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';

function GoogleMap(props) {
    const [infoWindow, setInfoWindow] = useState(false);
    const [activeMarker, setActiveMarker] = useState({});
    const [selectedPlace, setSelectedPlace] = useState({});

    const style = {
        height: '50%',
        width: '50%',
    };

    const coords = { lat: 41.74788, lng: -70.45386 };

    let onMarkerClick = ((props, marker, e) => {
        setSelectedPlace(props)
        setActiveMarker(marker)
        setInfoWindow(true)
    });

    let onMapClick = ((props) => {
        if(infoWindow) {
            setInfoWindow(false)
            setActiveMarker(null)
        }
    });

    return (
        <div>
            <Map
                google={props.google}
                onClick={onMapClick}
                zoom={15}
                style={style}
                initialCenter={coords}
            >
                <Marker
                    onClick={onMarkerClick}
                    title={'The Wedding at Twenty Roos Road'}
                    name={'No parking available.'}
                    position={coords}
                />
                <InfoWindow>
                    marker={activeMarker}
                    visible={infoWindow}
                    <div>
                        <h1>{selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        </div>
    )
}

export default GoogleApiWrapper({apiKey: 'AIzaSyChWJx4m3vny_sGGb54yD1FCKEkpicdMOo'})(GoogleMap);
