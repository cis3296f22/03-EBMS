import ImageUpload from './ImageUpload'
import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Country, State, City } from "country-state-city"
import Select from "react-select";

export default function Create({session}) {
    const supabase = useSupabaseClient()
    const user = useUser()
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null)
    const [website, setWebsite] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)
    const [title, setTitle] = useState(null)
    const [image_url, setImageUrl] = useState(null)
    const [location, setLocation] = useState(null)
    const [rate, setRate] = useState(null)
    const [city, setCity] = useState(null)
    const [state, setState] = useState(null)

    useEffect(() => {
        getProfile()
      }, [session])

      const states = State.getStatesOfCountry("US")
      let cities

      async function createBillBoard({title, imgUrl, loc, rate}) {
        try {
          setLoading(true)
    
          const updates = {
            user_id: user.id,
            title: title,
            imageUrl: imgUrl,
            location: loc,
            rate: rate
          }
    
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
    
      async function getProfile() {
        try {
          setLoading(true)
    
          let { data, error, status } = await supabase
            .from('profiles')
            .select(`username, website, avatar_url`)
            .eq('id', user.id)
            .single()
    
          if (error && status !== 406) {
            throw error
          }
    
          if (data) {
            setUsername(data.username)
            setWebsite(data.website)
            setAvatarUrl(data.avatar_url)
          }
        } catch (error) {
          alert('Error loading user data!')
          console.log(error)
        } finally {
          setLoading(false)
        }
      }

      function updateCities (state) {
        cities = City.getCitiesOfState("US", state.isoCode).map((city) => ({
            label: city.name, 
            value: city.id, 
            ...city}))
        console.log("updatedCities state: " + state.name)
        console.log("updatedCities state code: " + state.isoCode)
        console.log("updatedCities: " + cities)
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
        <>
        <ImageUpload
            uid={user.id}
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
      <Select
          id="state"
          name="state"
          options={updatedStates}
          value={state}
          onChange={(value) => {
            setState(value)
          }}
        />
      <Select
          id="city"
          name="city"
          options={updatedCities(state)}
          value={city}
          onChange={(value) => setCity(value)}
        />
      <div>
        <label>Cost</label>
        <input
          id="cost"
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <button
          className="button primary block"
          onClick={() => createBillBoard({ title, image_url, rate, state, city})}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Create Billboard'}
        </button>
      </>
    )
}