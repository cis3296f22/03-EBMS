import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Link from 'next/link'
import styles from './Account.module.css'
import MyBillboards from './MyBillboards'

export default function Account({ session }) {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setName(data.full_name)
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className={styles.welcomeContainer}>
        <div className={styles.welcome}>
          Welcome {name}
        </div>
        <div>
          <Link href="/">
              <button className={styles.signOut} onClick={() => supabase.auth.signOut()}>
                  Sign Out
              </button>
          </Link>
        </div>
      </div>
      <div className={styles.billboards}>
        Your Billboards
      </div>
      <MyBillboards userId={user.id}/>
    </div>
  )
}