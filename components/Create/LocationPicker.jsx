import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { MarkerF } from '@react-google-maps/api'

const containerStyle = {
  width: '800px',
  height: '400px'
};

const center = {
    lat: 39.9526,
    lng: -75.1652
  }
  
const position = {
    lat: 39.9526,
    lng: -75.1652
}


function MyComponent({updateLat, updateLng}) {

    const onLoad = marker => {
        console.log('marker: ', marker)
      }

    const getMarkerLocation = marker => {
        console.log('latitude: ', marker.latLng.lat())
        console.log('longitude: ', marker.latLng.lng())
        updateLat(marker.latLng.lat())
        updateLng(marker.latLng.lng())
    }

  return (
    <div>
        <LoadScript
        googleMapsApiKey="AIzaSyAw0-lPg9MzsRSAxXf9orluQr2tbtgCbA8"
        >
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
        </LoadScript>
    </div>
  )
}

export default React.memo(MyComponent)