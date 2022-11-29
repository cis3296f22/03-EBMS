import React, { useState } from 'react'

import styles from './BillboardCard.module.css'

function BillboardCard({name, imgSrc, size, rate, location}) {
  // const [selected, setSelected] = useState(false);
  // let selectedStyles = selected ? `${styles.billboardContainer} ${styles.selected}` : styles.billboardContainer;

  return (
    <div className={styles.billboardCard}>
      <img className={styles.billboardImage} src={imgSrc}></img>
      <div className={styles.descriptionContainer}>
        {name + " in "}  <b> {location} </b>
        <br/>
        { size } <br/>
        <i> {rate} </i>
      </div>
    </div>
  )
}

export default BillboardCard;