import Head from 'next/head'
import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'
import Header from '../components/Header/Header'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

export default function Buy() {
  const supabase = useSupabaseClient()

  const router = useRouter()
  const {session_id} = router.query

  useEffect(() => {
    async function loadData() {
      console.log("data loading")
      const { data, error } = await supabase.from('ad_bookings').update({'paymentVerified': true}).eq('id', 1).select()
      if (error) console.log(error)
      console.log(data)
    }
    loadData()
  }, [])

  return (
    <>
      <Head>
        <title>Billboard</title>
        <meta name="description" content="Doing billboard stuff" />
        <link rel="icon" href="/adorado.ico" />
      </Head>
      <Header/>
      <div style={{height: "100%", display:"flex", justifyContent:"center"}}>

        <h1> Purchase Successful! </h1>
      </div>
    </>
  )
}
