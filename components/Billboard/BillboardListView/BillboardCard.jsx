import React, { useState } from 'react'

import styles from './BillboardCard.module.css'

function BillboardCard(props) {
  const [selected, setSelected] = useState(false);
  // let selectedStyles = selected ? `${styles.billboardContainer} ${styles.selected}` : styles.billboardContainer;

  return (
    <div className={styles.billboardCard + " " + (selected ? styles.selected : "")} onClick={() => { props.setCurrentSelection(props) }}>
      <img className={styles.billboardImage} src={props.imgUrl}></img>
      <div className={styles.descriptionContainer}>
        {props.name + " in "}  <b> {props.location} </b>
        <br/>
        { props.size } <br/>
        <i> ${props.rate} per {props.updateInterval} </i>
      </div>
    </div>
  )
}

export default BillboardCard;