import React, { useState, useEffect } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import BillboardDetails from '../BillboardDetails/BillboardDetails'
import BillboardList from '../BillboardList/BillboardList'

import styles from './ListDetailsContainer.module.css'

const ListDetailsContainer = () => {
  const supabase = useSupabaseClient()

  const [listingsArray, setListingsArray] = useState([])
  const [currentSelection, setCurrentSelection] = useState(null)

  useEffect(() => {
    getBillBoardListings().then((billboardListings) => {
      setListingsArray(billboardListings)
    })
  }, [])

  async function getBillBoardListings() {
    const { data, error } = await supabase.from('billboard_listings').select('*')
    console.log(await supabase.from('billboard_listings').select().eq('id', 9).single())
    if (error) return []
    return data
  }

  return <div className={styles.listDetailContainer}>
    <BillboardList listingsArray={listingsArray} setCurrentSelection={setCurrentSelection}/>
    <BillboardDetails billboard={currentSelection}/>
  </div>
}

export default ListDetailsContainer;