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

  const [billboard, setBillboard] = useState(null)

  const router = useRouter()
  const {id} = router.query

  useEffect(() => {
    getBillboardListing().then(setBillboard)
  }, [])

  async function getBillboardListing() {
    const { data, error } = await supabase.from('billboard_listings').select().eq('id', parseInt(id)).single()
    if (error) return error
    return data
  }

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

          <div style={{width: "1000px", display:"flex", flexDirection:"column"}}>
            <BillboardCard {...billboard} setCurrentSelection={()=>{}}/>
            
            <BuyForm session={session} billboard={billboard}/>
          </div>
        </div>
      </>
    )
  else
    handleLogin(router.asPath)
}
