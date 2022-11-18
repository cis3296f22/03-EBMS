import React from 'react'

import styles from './NavigationButton.module.css'
import Link from 'next/link'

function NavigationButton({text, link}) {
  return (
    <Link href={link} className={styles.navButton}>
      <div className={styles.textContainer}>
        {text}
      </div>
    </Link>
  )
}

export default NavigationButton;