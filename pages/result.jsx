import Head from 'next/head'
import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'
import Header from '../components/Header/Header'
import { useSession } from '@supabase/auth-helpers-react'
import supabase, {handleLogin} from '../utils/supabaseClient';

export default function Buy() {
  const router = useRouter()
  const {session_id} = router.query

  useEffect(() => {
    // console.log(session_id)
    let { error } = supabase.from('ad_bookings').update({sessionId: session_id}).eq('paymentVerified', true)
    if (error) throw error
  }, [])

  return (
    <>
      <Head>
        <title>Billboard</title>
        <meta name="description" content="Doing billboard stuff" />
        <link rel="icon" href="/adorado.ico" />
      </Head>
      <Header/>
      <div style={{display:"flex", justifyContent:"center"}}>

        <h1> Purchased Successful! </h1>
      </div>
    </>
  )
}
