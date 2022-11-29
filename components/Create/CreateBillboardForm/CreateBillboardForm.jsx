import ImageUpload from '../ImageUpload'
import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Country, State, City } from "country-state-city"
import Select from "react-select";

import styles from './CreateBillboardForm.module.css'
import BillboardListView from '../../Billboard/BillboardCard/BillboardCard';

export default function CreateBillboardForm({session}) {
    const supabase = useSupabaseClient()
    const user = useUser()
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)
    const [rate, setRate] = useState(null)
    const [cityName, setCity] = useState(null)
    const [stateName, setState] = useState(null)

    const states = State.getStatesOfCountry("US")

    async function createBillBoard({title, imgUrl, rate, state, city}) {
      try {
        setLoading(true)

        const updates = {
          user_id: user?.id,
          title: title,
          imageUrl: imgUrl,
          rate: rate,
          state: state,
          city: city
        }

        console.log(updates)
  
        let { error } = await supabase.from('testing_billboards').insert(updates)
        if (error) throw error
        alert('Testing Billboards Inserted')
      } catch (error) {
        alert('Error updating the data!')
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    const updatedStates = states.map((state) => ({
      label: state.name,
      value: state.id,
      ...state
    }));

    const updatedCities = (stateId) => 
    {
      console.log(stateId?.name)
      const myCities = City.getCitiesOfState("US", stateId?.isoCode).map((city) => ({
          label: city.name, 
          value: city.id, 
          ...city}))
      console.log(myCities)
      return myCities
    }

    return(
      <div key="container" className={styles.formContainer}>
        <h1> Create Billboard </h1> 
        <ImageUpload uid={user?.id} onUpload={setImageUrl}/>
        <div>
          <label>Title</label>
          <input id="title" onChange={(e) => setTitle(e.target.value)}/>
        </div>
        {/* <Select id="state" name="state" options={updatedStates} value={stateName} onChange={(value) => { setState(value)}} /> */}
        {/* <Select id="city" name="city" options={updatedCities(stateName)} value={cityName} onChange={(value) => { setCity(value)}}/> */}
        <div>
          <label>Rate</label>
          <input id="rate" onChange={(e) => setRate(e.target.value)}/>
        </div>
        <button className="button primary block" onClick={() => { createBillBoard({title, imgUrl: imageUrl, rate, state:stateName.name, city:cityName.name}) }} disabled={loading}>
          {loading ? 'Loading ...' : 'Create Billboard'}
        </button>
        <div>
          <h2> Preview </h2>
          <BillboardListView name={title} rate={rate} imgSrc={imageUrl}></BillboardListView>
        </div>
      </div>
    )
}