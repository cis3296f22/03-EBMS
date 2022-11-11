import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import React, {createContext, useState, useEffect} from 'react'
// import useFirebaseAuth from'../config/useFirebaseAuth'
// import { AuthUserProvider } from '../context/AuthUserContext'

function MyApp({Component, pageProps, session}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
