import {React, useState, useEffect} from 'react';
import styles from './NavigationButton.module.css'
import {supabase} from '../utils/supabaseClient';
import Auth from '../utils/Auth'
import Account from '../utils/Account'

async function handleLogin() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:3000'
    }
  })
}

async function handleLogoff() {
  const {error} = await supabase.auth.signOut()
}

const Login = () => {

  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  if(!session){
    return (
      <a className={styles.navButton}>
        <div id="SignIn" onClick={handleLogin}>
          Sign In
        </div>
      </a>
    )
  }
  return (
    <a className={styles.navButton}>
      <div id="SignIn" onClick={handleLogoff}>
        My Account
      </div>
    </a>
  )
}

export default Login