import React from 'react'

import NavigationButton from './NavigationButton'
import styles from './Header.module.css'
import Logo from './Logo'

function Header() {
  let navButtons = [
    {
      text: "Create",
    },
    {
      text: "Search",
    },
    {
      text: "Manage"
    }
  ]

  return (
    <header className={styles.header}>
      <div style={{backgroundColor: ""}} className={styles.headerWrapper}>
        <Logo/>
        { navButtons.map((item) => {
          return <NavigationButton text={item.text}></NavigationButton>
        })}
        {/* <Search></Search> */}
      </div>
    </header>
  )
}

export default Header;