import Head from 'next/head'
import React from 'react'
import Header from '../components/Header/Header'
import Create from '../components/Create/CreateBillboardFormContainer/CreateBillboardFormContainer'
import { useSession, useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import {supabase} from '../utils/supabaseClient';

export default function MyCreate() {
  const session = useSession()

  async function handleLogin() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: '/' //PUBLISHING
        //redirectTo: 'http://localhost:3000' //FOR TESTING
      }
    })
  }

  if(session)
    return (
      <>
        <Head>
          <title>Billboard</title>
          <meta name="description" content="Doing billboard stuff" />
          <link rel="icon" href="/adorado.ico" />
        </Head>
        <Header/>
        <Create session={session}/>
      </>
    )
  else
    handleLogin()
}
