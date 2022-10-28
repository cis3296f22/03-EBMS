import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, {createContext, useState, useEffect} from 'react'
// import useFirebaseAuth from'../config/useFirebaseAuth'
// import { AuthUserProvider } from '../context/AuthUserContext'



export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
