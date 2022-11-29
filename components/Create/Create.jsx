import ImageUpload from '../ImageUpload'
import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Country, State, City } from "country-state-city"
import Select from "react-select";
import LocationPicker from './LocationPicker'
import Link from 'next/link'

export default function Create({session}) {
    const supabase = useSupabaseClient()
    const user = useUser()
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState(null)
    const [image_url, setImageUrl] = useState(null)
    const [rate, setRate] = useState(null)
    const [lat, setLat] = useState(39.9526)
    const [lng, setLng] = useState(-75.1652)

    async function createBillBoard() {
        try {
          const myName = '%'+ name +'%'

          setLoading(true)

          const updates = {
            name: title,
            rate: rate,
            size: "800x400",
            location: "City, State",
            imgUrl: image_url,
            ownerId: user?.id,
            updateInterval: 10,
            locationX: lat,
            locationY: lng,
          }

          console.log(updates)
    
          let { error } = await supabase.from('billboard_listings').insert(updates)
          if (error) throw error
          alert('Testing Billboards Inserted')
        } 
        catch (error) {
          alert('Error updating the data!')
          console.log(error)
        } 
        finally {
          setLoading(false)
        }
  }

  const setLatRef = (val) =>
  {
    setLat(val)
  }

  const setLngRef = (val) =>
  {
    setLng(val)
  }

  return(
        <>
        <ImageUpload
            uid={user?.id}
            onUpload={(url) => {
                setImageUrl(url)
              }}
        />
       <div>
        <label>Title</label>
        <input
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Latitude</label>
        <input
        id="lat"
        value={lat}
        onChange={(e) => setLatRef(e.target.value)} />
      </div>
      <div>
        <label>Longitude</label>
        <input
        id="lng"
        value={lng}
        onChange={(e) => setLngRef(e.target.value)} />
      </div>
      <LocationPicker
        updateLat={(val) => {
          setLat(val)
        }}
        updateLng={(val) => {
          setLng(val)
        }}
      />
      <div>
        <label>Rate</label>
        <input
          id="rate"
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <Link href="/">
        <button
          className="button primary block"
          onClick={() => {
            createBillBoard()
          }}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Create Billboard'}
        </button>
      </Link>
      </>
  )
}