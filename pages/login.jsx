import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

const Login = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
        <Auth 
            providers={['google']}
            supabaseClient={supabase} 
            appearance={{ theme: ThemeSupa }} 
            theme="light" 
        />
    </div>
  )
}

export default Login