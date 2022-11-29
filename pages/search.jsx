import Head from 'next/head'
import React, {useState, useEffect } from 'react'
import {Form, setForm} from 'react-bootstrap'
import Search from '../components/Search/search'
import Header from '../components/Header/Header'
import styles from '../components/Search.module.css'
import { useSession, useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
// import { createUserWithEmailAndPassword, getAuth } from '../config/firebase'

const mySearch = () => {
  const session = useSession(null)
  const [, setFetchError] = useState(null)
  const [data, setLocation] = useState(null)

  useEffect(() => {
    const fetchLocation = async () => {
      const {data, error} = await supabase
        .from('ad_bookings')
        .select('name')
        .contains('name', ['value']) // 'value' will be whatever is entered in the search bar

    }  
  })

  return (
    <>
      <Head>
        <title>Billboard</title>
        <meta name="description" content="Doing billboard stuff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Search session={session}/>
    </>
  )
}
export default mySearch;
