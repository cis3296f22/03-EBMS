import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import ListDetailsContainer from '../components/ListDetailsContainer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Billboard</title>
        <meta name="description" content="Doing billboard stuff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <ListDetailsContainer/>
    </>
  )
}
