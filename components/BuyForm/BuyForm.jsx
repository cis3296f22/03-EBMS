import ImageUpload from '../ImageUpload'
import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Link from 'next/link'

export default function BuyForm({session, billboardId}) {
    const supabase = useSupabaseClient()
    const user = useUser()
    const [startTime, setStartTime] = useState(null)
    const [name, setName] = useState("")
    const [imageUrl, setImageUrl] = useState(null)

    async function createAd() {
      const updates = {
        name: name,
        imgUrl: imageUrl,
        ownerId: user?.id,
        billboardId: billboardId
      }

      console.log(updates)

      let { error } = await supabase.from('ad_bookings').insert(updates)
      if (error) throw error
}
  return (
        <>
        <ImageUpload uid={user?.id} onUpload={setImageUrl}/>
       <div>
        <label>Ad Name</label>
        <input id="title" onChange={(e) => setName(e.target.value)}/>
      </div>
      <Link href="/">
        <button className="button primary block" onClick={() => { createAd() }}> Purchase Ad </button>
      </Link>
      </>
  )
}