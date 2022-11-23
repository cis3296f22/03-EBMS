import React from 'react'

import NavigationButton from '../NavigationButton/NavigationButton'
import styles from './Header.module.css'
import Logo from '../Logo/Logo'
import Login from '../NavigationButton/Login'

function Header() {
  let navButtons = [
    {
      text: "Create",
      link: "/create"
    },
    {
      text: "Search",
      link: "/search"
    },
    {
      text: "Manage",
      link: "/manage"
    }
  ]

  return (
    <header className={styles.header}>
      <div style={{backgroundColor: ""}} className={styles.headerWrapper}>
        <Logo/>
        { navButtons.map((item) => {
          return <NavigationButton key={item.text} text={item.text} link={item.link}></NavigationButton>
        })}
        {/* <Search></Search> */}
        <Login/>
      </div>
    </header>
  )
}

export default Header;