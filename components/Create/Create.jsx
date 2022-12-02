import ImageUpload from '../ImageUpload'
import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import LocationPicker from './LocationPicker'
import Link from 'next/link'
import styles from './Create.module.css'
import BillboardCard from '../Billboard/BillboardListView/BillboardCard'

export default function Create({session}) {
    const supabase = useSupabaseClient()
    const user = useUser()
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("Name")
    const [imgUrl, setImgUrl] = useState(null)
    const [rate, setRate] = useState(0)
    const [size, setSize] = useState("Size by Size")
    const [lat, setLat] = useState(39.9526)
    const [lng, setLng] = useState(-75.1652)
    const [location, setLocation] = useState("City, State")

    async function createBillBoard() {
        try {
          setLoading(true)

          const url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&result_type=street_address&key=AIzaSyCfr2w8UW9oWm4Q1kQfI2Uv_gkMHG62pIo"
          let myState
          let myCity
          console.log(url)

            try {
              const response = await fetch(url);
              const json = await response.json();
              console.log(json)
              const array = json.results[0].address_components
              console.log(array)
              for(var i = 0; i < array.length; i++){
                if(array[i].types[0] == "locality")
                  myCity = array[i].long_name
                else if(array[i].types[0] == "administrative_area_level_1")
                  myState = array[i].long_name
              }
            } catch (error) {
              console.error(error);
            }

          if (myCity && myState) setLocation(myCity + ", " + myState)

          const updates = {
            name: name,
            rate: rate,
            size: size,
            location: location,
            imgUrl: imgUrl,
            ownerId: user?.id,
            updateInterval: 10,
            locationX: lat,
            locationY: lng,
          }

          console.log(updates)

          let { error } = await supabase.from('billboard_listings').insert(updates)
          if (error) throw error
          alert('Billboard Created')
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
    <div className={styles.container}>
      <form className={styles.createForm} onSubmit={createBillBoard}>
        <h3> Create </h3>
        <ImageUpload
          onUpload={(url) => { setImgUrl(url) }}
          imageType={0}/>
        <div>
          <label>Name </label>
          <input id="name" onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Location </label>
          <input id="location" onChange={(e) => setLocation(e.target.value)} value={location}/>
        </div>
        <div>
          <label>Size </label>
          <input id="size" onChange={(e) => setSize(e.target.value)}/>
        </div>
        <div>
          <label>Rate </label>
          <input type="number" id="rate" onChange={(e) => setRate(e.target.value)}/>
        </div>
        <div>
          <label>Latitude </label>
          <input id="lat" value={lat} onChange={(e) => setLatRef(e.target.value)} />
        </div>
        <div>
          <label>Longitude </label>
          <input id="lng" value={lng} onChange={(e) => setLngRef(e.target.value)} />
        </div>
        <div className={styles.map}>
          <LocationPicker updateLat={(val) => { setLat(val) }} updateLng={(val) => { setLng(val) }}/>
        </div>
        <h3> Preview </h3>
        <BillboardCard name={name} rate={rate} size={size} location={location} imgUrl={imgUrl} updateInterval={"second"}/>
        <Link href="/">
          <button type="submit" onClick={createBillBoard} disabled={loading} className={styles.createButton}>
            {loading ? 'Loading ...' : 'Create Billboard'}
          </button>
        </Link>
      </form>
    </div>
  )
}