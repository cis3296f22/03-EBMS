import {React, useState, useEffect} from 'react';
import styles from './NavigationButton.module.css'
import {supabase} from '../utils/supabaseClient';
import Link from 'next/link'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import Account from './Account'

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

const SignIn = () => {

  const session = useSession()
  const supabase = useSupabaseClient()

  if(!session){
    return (
      <a className={styles.navButton}>
        <div id="SignIn" className={styles.textContainer} onClick={handleLogin}>
          Sign In
        </div>
      </a>
    )
  }
  return (
      <Link href={ {pathname: "/account", query: {session: session}} } className={styles.navButton}>
        <div id="MyAccount" className={styles.textContainer}>
          My Account
        </div>
      </Link>
  )
}

export default SignIn