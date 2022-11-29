
import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import BillboardList from '../Billboard/BillboardList/BillboardList';

export default function Search({session}) {
    const supabase = useSupabaseClient()
    const user = useUser()
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState(null) //Search term to be entered
    const [listArray, setListArray] = useState([]) //Returned array 

    async function getBillBoard() {
        try {
          setLoading(true)

          console.log(name)
          const myName = '%'+ name +'%'
          const { data, error } = await supabase.from('billboard_listings').select().ilike('name', myName)
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