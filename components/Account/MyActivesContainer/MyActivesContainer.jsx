import React from 'react'
import styles from './MyActivesContainer.module.css'
import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'


// function clickMe() {
//     alert('you clicked me');
//     console.log('test log')
// }

export default function MyActivesContainer({ session }) {

    const supabase = useSupabaseClient();
    const user = useUser();
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState(null);
    const [website, setWebsite] = useState(null);
    const [avatar_url, setAvatarUrl] = useState(null);

    useEffect(() => {
        getProfile()
      }, [session])
    
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

    async function getBillboards() {
        try {
           
        const {data, error} = await supabase
            .from('testing_billboards')
            .select('title, imageUrl, rate')
            .eq('user_id', user.id);

        if (error) throw error;
        alert ('receivingBillboardsSuccessful');
        console.log(data);

        } catch (error) {
            console.log(error);

        }
    }

    function clickMe() {
        getBillboards();
        console.log('test log');
    }
    

    return (
    <div className={styles.activesContainer}>
        <div className={styles.activesHeader}>
            <div className={styles.activesHeaderLeft}>
                <button onClick={clickMe}>My Ads</button>
            </div>
            <div className={styles.activesHeaderRight}>
                <h2>My Billboards</h2>
            </div>
        </div>
        <div className={styles.activesBody}>
            <p>activesBody</p>
        </div>
    </div>
    
    )
}


