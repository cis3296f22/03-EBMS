import Head from 'next/head'
import React from 'react'
import Header from '../components/Header/Header'
import CreateBillboardFormContainer from '../components/Create/CreateBillboardFormContainer/CreateBillboardFormContainer'
import { useSession, useSupabaseClient, useUser } from '@supabase/auth-helpers-react'

export default function MyCreate() {
  const session = useSession()
  return (
    <>
      <Head>
        <title>Billboard</title>
        <meta name="description" content="Doing billboard stuff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <CreateBillboardFormContainer session={session}/>
    </>
  )
}
