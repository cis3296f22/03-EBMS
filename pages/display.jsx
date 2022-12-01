import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useSession, useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import {handleLogin} from '../utils/supabaseClient';
import { useRouter } from 'next/router'

export default function Display() {
  const supabase = useSupabaseClient()
  const router = useRouter()
  const [imgUrl, setImgUrl] = useState();

  async function pollBillboardData() {
    try {
      const { data, error } = await supabase.from('ad_bookings').select().eq('purchaseVerified', true).order('createdAt', { ascending: false }).select('imgUrl').eq('billboardId', parseInt(router.query.billboardId))
      if(data === null)
        alert('No Ad On Billboard')
      else{
        setImgUrl(data[0].imgUrl)
      }
      if (error) throw error
    } 
    catch (error) {
      alert('No Ad on Billboard!')
      console.log(error)
    } 
  }

  useEffect(() => {
    
    if (router.query.billboardId) pollBillboardData();

    setInterval(() => {
      if (router.query.billboardId) pollBillboardData();
    }, 10000)
  }, [router])


  return (
    <>
      <Head>
        <title>Display Billboard</title>
        <meta name="description" content="Doing billboard stuff" />
        <link rel="icon" href="/adorado.ico" />
      </Head>
      <img style={{height: "100%", objectFit: "cover"}} src={imgUrl}></img>
    </>
  )
}
