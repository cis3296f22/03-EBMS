import Head from 'next/head'
import React from 'react'
import Header from '../components/Header/Header'
import Create from '../components/Create/Create'
import { useSession, useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import {handleLogin} from '../utils/supabaseClient';

export default function MyCreate() {
  const session = useSession()

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
