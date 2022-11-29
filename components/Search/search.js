
import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Country, State, City } from "country-state-city"
import Select from "react-select";
import BillboardList from '../Billboard/BillboardList/BillboardList';

export default function Search({session}) {
    const supabase = useSupabaseClient()
    const user = useUser()
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState(null)
    const [listArray, setListArray] = useState([])

    async function getBillBoard() {
        try {
          setLoading(true)

          console.log(name)
          const myName = '%'+ name +'%'
          const { data, error } = await supabase.from('billboard_listings').select().ilike('title', myName)
          setListArray(data)
          
          if (error) throw error
          alert('Testing Billboards Inserted')
        } catch (error) {
          alert('Error updating the data!')
          console.log(error)
        } finally {
          setLoading(false)
        }
      }
      return(
        <>
       <div>
        <label>BillBoard Name</label>
        <input
          id="title"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button
          className="button primary block"
          onClick={() => {
            getBillBoard({})
          }}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Create Billboard'}
        </button>
      <BillboardList listingsArray={listArray}> </BillboardList>
      </>
    )
}