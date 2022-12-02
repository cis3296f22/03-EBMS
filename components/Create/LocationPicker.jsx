import React from 'react'
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '700px',
  height: '350px'
};

const center = {
    lat: 39.9526,
    lng: -75.1652
}
  
const position = {
    lat: 39.9526,
    lng: -75.1652
}

function LocationPicker({updateLat, updateLng}) {
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAw0-lPg9MzsRSAxXf9orluQr2tbtgCbA8',
    libraries: ['geometry', 'drawing'],
  });

    const onLoad = marker => {
        console.log('marker: ', marker)
      }

    const getMarkerLocation = marker => {
        //console.log('latitude: ', marker.latLng.lat())
        //console.log('longitude: ', marker.latLng.lng())
        updateLat(marker.latLng.lat())
        updateLng(marker.latLng.lng())
  }


  return (
    <div>
        <GoogleMap
            id="marker-example"
            mapContainerStyle={containerStyle}
            zoom={5}
            center={center}
        >
            <MarkerF
            onLoad={onLoad}
            position={position}
            clickable={true}
            draggable={true}
            onDragEnd={getMarkerLocation}
            />
        </GoogleMap>
    </div>
  )
}

export default React.memo(LocationPicker)