import React from 'react'

import styles from './NavigationButton.module.css'
import Link from 'next/link'
import {useRouter} from 'next/router'

function NavigationButton({text, link}) {

  const router = useRouter();

  return (
    <Link href={link} className={router.pathname == link ? styles.active + " " + styles.navButton : styles.navButton}>
      <div className={styles.textContainer}>
        {text}
      </div>
    </Link>
  )
}

export default NavigationButton;