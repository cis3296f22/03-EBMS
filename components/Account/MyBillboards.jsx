
import { useState, useEffect } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import AccountBillboardList from '../Billboard/AccountBillboardList/AccountBillboardList';
import styles from './MyBillboards.module.css'

export default function Search({userId}) {
    const supabase = useSupabaseClient()
    const [loading, setLoading] = useState(false)
    const [listArray, setListArray] = useState([]) //Returned array 

    useEffect( () => {
        getBillBoard()
    }, [] )

    async function getBillBoard() {
      try {
        setLoading(true)
        console.log(userId)
        const { data, error } = await supabase.from('billboard_listings').select().eq('ownerId', userId)
        console.log(data)
        setListArray(data)
        if (error) throw error
      } catch (error) {
        alert('Error updating the data!')
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    
    return(
      <div className={styles.container}>
        <div>
          <AccountBillboardList listingsArray={listArray}> </AccountBillboardList>
        </div>
      </div>
    )
}