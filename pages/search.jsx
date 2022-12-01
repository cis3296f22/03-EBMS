import Head from 'next/head'
import React, {useState, useEffect } from 'react'
import Search from '../components/Search/search'
import Header from '../components/Header/Header'
import styles from '../components/Search.module.css'
import { useSession, useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
// import { createUserWithEmailAndPassword, getAuth } from '../config/firebase'

export default function MySearch(){
  const session = useSession()
  return (
    <>
      <Head>
        <title>Search for a BillBoard</title>
        <meta name="description" content="Doing billboard stuff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Search session={session}/>
    </>
  )
}
