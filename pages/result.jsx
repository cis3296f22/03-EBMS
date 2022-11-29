import Head from 'next/head'
import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'
import Header from '../components/Header/Header'
import { useSession } from '@supabase/auth-helpers-react'
import supabase, {handleLogin} from '../utils/supabaseClient';
import BillboardCard from '../components/Billboard/BillboardListView/BillboardCard'
import BuyForm from '../components/BuyForm/BuyForm'

export default function Buy() {
  const session = useSession()

  const router = useRouter()
  const {session_id} = router.query

  useEffect(() => {
    let { error } = supabase.from('ad_bookings').update({sessionId: session_id}).eq('paymentVerified', true)
    if (error) throw error
  }, [])

  if(session)
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
  else
    handleLogin(router.asPath)
}
