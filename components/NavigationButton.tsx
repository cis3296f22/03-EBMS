import React from 'react'

import styles from './NavigationButton.module.css'

function NavigationButton({text}:{text:any}) {
  return (
    <a className={styles.navButton}>
      {text}
    </a>
  )
}

export default NavigationButton;