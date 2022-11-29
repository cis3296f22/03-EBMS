import React from 'react'

import styles from './Logo.module.css'

import Image from 'next/image'

import Link from 'next/link'

function Logo() {
  return (
    <Link href="/">
    <div className={styles.logoContainer}>
      <Image
        src="/sexyGoldStd.png"
        alt="Billboard logo"
        width={195}
        height={30}
      />
    </div>
    </Link>
  )
}

export default Logo;