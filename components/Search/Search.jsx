
import { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import BillboardList from '../Billboard/BillboardList/BillboardList';
import styles from './Search.module.css'
import { useRouter } from 'next/router'

export default function Search() {
    const supabase = useSupabaseClient()
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState(null) //Search term to be entered
    const [listArray, setListArray] = useState([]) //Returned array 
    const router = useRouter()

    async function getBillBoard() {
      try {
        setLoading(true)

        console.log(name)
        const myName = '%'+ name +'%'
        const { data, error } = await supabase.from('billboard_listings').select().or('name.ilike.' + myName + ', location.ilike.' + myName)
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
        <div className={styles.searchContainer}>
          <div className={styles.component}>
            <input className={styles.searchInput} size={70} id="title" onChange={(e) => {
              setName(e.target.value)}}/>
          </div>
          <button className={styles.searchButton} onClick={() => { getBillBoard({}) }} disabled={loading}>
            {loading ? 'Loading ...' : 'Search'}
          </button>
        </div>
        <div>
          <BillboardList listingsArray={listArray} setCurrentSelection={(billboardSelection) => {router.push(`http://03-ebms.vercel.app/billboard/${billboardSelection.id}`)}}> </BillboardList>
        </div>
      </div>
    )
}