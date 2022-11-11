import React from 'react'

import styles from './Logo.module.css'

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logoImg} src="./logo.png"></img>
    </div>
  )
}

export default Logo;