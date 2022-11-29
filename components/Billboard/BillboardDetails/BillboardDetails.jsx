import React from 'react'
import Link from 'next/link'

import styles from './BillboardDetails.module.css'
import ContextButtons from './ContextButtons/ContextButtons'

const BillboardDetails = ({billboard}) => {
  console.log(billboard)

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
          </div>
          
          <ContextButtons billboardId={billboard.id}/>
        </>}
      </div>
    </div>
  )
}

export default BillboardDetails;
