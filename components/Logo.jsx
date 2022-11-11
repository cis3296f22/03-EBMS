import React from 'react'

import styles from './Logo.module.css'

import Image from 'next/image'

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Image
        src="/logo.png"
        alt="Billboard logo"
        width={140}
        height={25}
      />
    </div>
  )
}

export default Logo;