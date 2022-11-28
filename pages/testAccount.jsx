import Head from 'next/head'
import React from 'react'
import Header from '../components/Header/Header'
import ListDetailsContainer from '../components/Billboard/ListDetailsContainer/ListDetailsContainer'
import Welcome from '../components/Account/Welcome/Welcome'
import MyActivesContainer from '../components/Account/MyActivesContainer/MyActivesContainer'
import { useSession, useSupabaseClient, useUser } from '@supabase/auth-helpers-react'

export default function Home() {

  const session = useSession();

  return (
    <>
      <Head>
        <title>Billboard</title>
        <meta name="description" content="Doing billboard stuff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Welcome/>
      <MyActivesContainer session={session}/>
    </>
  )
}
