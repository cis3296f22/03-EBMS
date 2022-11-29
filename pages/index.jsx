import Head from 'next/head'
import React from 'react'
import Header from '../components/Header/Header'
import ListDetailsContainer from '../components/Billboard/ListDetailsContainer/ListDetailsContainer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Billboard</title>
        <meta name="description" content="Doing billboard stuff" />
        <link rel="icon" href="/adorado.ico" />
      </Head>

      <Header/>
      <ListDetailsContainer/>
    </>
  )
}