import React from 'react'

import styles from './NavigationButton.module.css'

function NavigationButton({text}) {
  return (
    <a className={styles.navButton}>
      <div className={styles.textContainer}>
        {text}
      </div>
    </a>
  )
}

export default NavigationButton;