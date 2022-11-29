
import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Country, State, City } from "country-state-city"
import Select from "react-select";

export default function Search({session}) {
    const supabase = useSupabaseClient()
    const user = useUser()
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState(null)
    //const [image_url, setImageUrl] = useState(null)
    //const [rate, setRate] = useState(null)
    //const [lat, setLat] = useState(39.9526)
    //const [lng, setLng] = useState(-75.1652)

    async function getBillBoard() {
        try {
          setLoading(true)

          console.log(name)
          const myName = '%'+ name +'%'
          const { data, error } = await supabase.from('testing_billboards').select().ilike('title', myName)
          console.log(data)
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
      </>
    )
}