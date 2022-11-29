import ImageUpload from '../ImageUpload'
import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Link from 'next/link'
import getStripe from '../../utils/get-stripejs'
import { fetchPostJSON } from '../../utils/api-helpers'

export default function BuyForm({session, billboard}) {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [startTime, setStartTime] = useState(null)
  const [name, setName] = useState("")
  const [imageUrl, setImageUrl] = useState(null)

  async function createAd(checkoutSession) {
    const updates = {
      name: name,
      imgUrl: imageUrl,
      ownerId: user?.id,
      billboardId: billboard.id,
      paymentVerified: false,
      sessionId: checkoutSession.id
    }

    let { error } = await supabase.from('ad_bookings').insert(updates)
    if (error) throw error
  }  
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(`Rate: ${billboard.rate*100}`)

    // Create a Checkout Session.
    const checkoutSession = await fetchPostJSON(
      '/api/checkout_sessions',
      { amount: billboard.rate },
    );
  
    if ((checkoutSession).statusCode === 500) {
      console.error((checkoutSession).message);
      return;
    }

    await createAd(checkoutSession);
  
    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: checkoutSession.id,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);
  };

  return (
      <>
        <ImageUpload uid={user?.id} onUpload={setImageUrl}/>
        <div>
          <label>Ad Name</label>
          <input id="title" onChange={(e) => setName(e.target.value)}/>
        </div>
        <Link href="/">
          <button className="button primary block" onClick={handleSubmit}> Purchase Ad </button>
        </Link>
      </>
  )
}