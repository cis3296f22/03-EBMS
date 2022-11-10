import React from 'react'

import NavigationButton from './NavigationButton'
import styles from './Header.module.css'

function Header() {

  return (
    <header className={styles.header}>
      <div style={{backgroundColor: ""}} className={styles.headerWrapper}>
        <NavigationButton text="Create Billboard"/>
        <NavigationButton text="List an Ad"/>
        <NavigationButton text="Search Ads" />
        <NavigationButton text="Logout"/>
        {/* <Search></Search> */}
      </div>
    </header>
  )
}

export default Header;