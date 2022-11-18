import React from 'react';
import styles from './NavigationButton.module.css'
import {session} from '@supabase/supabase-js'
import LoginButton from '../pages/supabaseClient';


const Login = () => {

  return (
    <a className={styles.navButton}>
      <div id="SignIn" onClick={LoginButton}>
      Sign In
      </div>
    </a>
  )

  if (sesh != null) {
    return (
      <a className={styles.navButton}>
        <div id="myAccount" onClick={logout}>
            My Account
        </div>
      </a>
    )
  }
  return (
    <a className={styles.navButton}>
      <div id="SignIn" onClick={loginGoogle}>
      Sign In
      </div>
    </a>
  )
}

export default Login