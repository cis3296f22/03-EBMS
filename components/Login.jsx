import React from 'react';
import styles from './NavigationButton.module.css'
import {supabase} from '../pages/supabaseClient';

async function handleLogin() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google'
  })
}

const Login = () => {

  return (
    <a className={styles.navButton}>
      <div id="SignIn" onClick={handleLogin}>
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