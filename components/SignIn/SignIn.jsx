import {React, useState, useEffect} from 'react';
import styles from '../NavigationButton/NavigationButton.module.css'
import {supabase} from '../../utils/supabaseClient';
import Link from 'next/link'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import Account from '../Account'

async function handleLogin() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: '/' //PUBLISHING
      //redirectTo: 'http://localhost:3000' //FOR TESTING
    }
  })
}

async function handleLogoff() {
  const {error} = await supabase.auth.signOut()
}

const SignIn = () => {

  const session = useSession()
  const supabase = useSupabaseClient()

  if(!session)
    return (
      <a className={styles.navButton}>
        <div id="SignIn" className={styles.textContainer} onClick={handleLogin}>
          Sign In
        </div>
      </a>
    )
  else
    return (
        <Link href="/account" className={styles.navButton}>
          <div id="MyAccount" className={styles.textContainer}>
            My Account
          </div>
        </Link>
    )
}

export default SignIn