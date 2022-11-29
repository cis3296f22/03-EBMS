import Head from 'next/head'
import React from 'react'
import Search from '../components/Search/Search'
import Header from '../components/Header/Header'
import { useSession } from '@supabase/auth-helpers-react'
// import { createUserWithEmailAndPassword, getAuth } from '../config/firebase'

export default function MySearch(){
  const session = useSession()
  return (
    <>
      <Head>
        <title>Search for a BillBoard</title>
        <meta name="description" content="Doing billboard stuff" />
        <link rel="icon" href="/adorado.ico" />
      </Head>
      <Header/>
      <Search session={session}/>
    </>
  )
}
