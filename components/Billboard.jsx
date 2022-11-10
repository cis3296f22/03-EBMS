import React, { useState } from 'react'

import styles from './Billboard.module.css'

function Billboard({name, imgSrc, size, rate, location}) {
  const [selected, setSelected] = useState(false);

  return (
    <div className={selected ? `${styles.billboardContainer} ${styles.selected}` : styles.billboardContainer} onClick={() => { setSelected(!selected) }}>
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

export default Billboard;