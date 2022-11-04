import React from 'react'

import styles from './Billboard.module.css'

type BillboardProps = {
  imgSrc: string,
  size: String,
  rate: String,
  location: String
}

function Billboard({imgSrc, size, rate, location}: BillboardProps) {

  return (
    <div className={styles.billboardContainer}>
      <img className={styles.billboardImage} src={imgSrc}></img>
      <div className={styles.descriptionContainer}>
        <b> {size} </b> <br/>
        { rate } <br/>
        <i> {location} </i>
      </div>
      <div className={styles.selectButton}>
        Select
      </div>
    </div>
  )
}

export default Billboard;