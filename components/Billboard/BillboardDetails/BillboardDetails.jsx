import React, { useState } from 'react'
import Link from 'next/link'

import styles from './BillboardDetails.module.css'
import ContextButtons from './ContextButtons/ContextButtons'

import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const BillboardDetails = ({billboard}) => {
  // const [mapOpen, setMapOpen] = useState(false)

  return (
    <div className={styles.billboardFullViewContainer}>
      <div className={styles.billboardFullView}>
        { !billboard ? "" : <>
          <img className={styles.billboardDetailsImg} src={billboard.imgUrl}></img>
          <div className={styles.billboardDetailsText}>
            <div className={styles.billboardHeadline}>
              <span className={styles.billboardName}> {billboard.name} </span> in
              <span className={styles.billboardLocation}> {billboard.location} </span>
            </div>

            <h3 className={styles.billboardOther}>{`$${billboard.rate} per ${billboard.updateInterval} seconds`} | {billboard.size} </h3>
          
            <ContextButtons billboardId={billboard.id}/>
          </div>
          <div className={styles.billboardMap}>
            <LoadScript googleMapsApiKey="AIzaSyAw0-lPg9MzsRSAxXf9orluQr2tbtgCbA8">
              <GoogleMap mapContainerStyle={{width: "100%", height: "400px"}} zoom={10} center={{lat: billboard.locationX, lng: billboard.locationY}}>
                  <MarkerF position={{lat: billboard.locationX, lng: billboard.locationY}} clickable={false} draggable={false}/>
              </GoogleMap>
            </LoadScript>
          </div>
        </>}
      </div>
    </div>
  )
}

export default BillboardDetails;
