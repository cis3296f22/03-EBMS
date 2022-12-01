import React from 'react'
import BillboardCard from '../BillboardListView/BillboardCard'
import styles from './AccountBillboardList.module.css'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

const BillboardList = ({ listingsArray, setCurrentSelection }) => {
  const supabase = useSupabaseClient()
  const router = useRouter()

  if (listingsArray.length == 0) return (<>No billboards</>)

  async function handleDelete(id) {
    try {
      console.log(id)
      const { error } = await supabase.from('billboard_listings').delete().eq('id', id)
      if (error) throw error
      alert('Billboard Deleted')
    } 
    catch (error) {
      alert('Cannot Delete Billboard With Ad')
      console.log(error)
    } 
}

async function handleDisplay(id) {
  try {
    console.log(id)
    const { data, error } = await supabase.from('ad_bookings').select('imgUrl').eq('billboardId', id)
    if(data === null)
      alert('No Ad On Billboard')
    else{
      console.log(data[0].imgUrl)
      window.open(data[0].imgUrl, '_blank')
    }
    if (error) throw error
  } 
  catch (error) {
    alert('No Ad on Billboard!')
    console.log(error)
  } 
}

  return (<div className={styles.billboardListContainer}>
    {React.Children.toArray(listingsArray.map((props) => {
      console.log(props.id)
      return (
        <div>
          <BillboardCard {...props} setCurrentSelection={setCurrentSelection}/>
          <button className={styles.button} onClick={(billboardSelection) => {router.push(`http://03-ebms.vercel.app/display?billboardId=${props.id}`)}}>
            Display
          </button>
          <button className={styles.button} onClick={() => handleDelete(props.id)}>
            Delete
          </button>
        </div>
      )
    }))}
  </div>)
}

export default BillboardList;