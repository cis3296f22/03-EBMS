import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import styles from './NavigationButton.module.css'
import Image from 'next/image'


const Login = () => {
  const { data: session } = useSession()

  var src

  if(session){
      src = session.user.image
  }

  if (session) {
    return (
      <a className={styles.navButton}>
        <div onClick={() => signOut()}>
            My Account
        </div>
      </a>
    )
  }
  return (
    <a className={styles.navButton}>
      <div id="SignIn" onClick={() => signIn()}>
      Sign In
      </div>
    </a>
  )
}

export default Login