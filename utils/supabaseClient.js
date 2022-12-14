import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uomcmbqkndtmleifmays.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvbWNtYnFrbmR0bWxlaWZtYXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg3MDUxNTYsImV4cCI6MTk4NDI4MTE1Nn0.WrbkHFkLzdv-YVIAG0qGbiwlHCqAdqr50OgQ83Y8aXs'

let supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase;

export const handleLogin = async function(path) {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: path //PUBLISHING
      // redirectTo: 'http://localhost:3000' + path //FOR TESTING
    }
  })
}

//export default supabase

// const LoginButton = () => {
//   let supabase = createClient(
//     'https://uomcmbqkndtmleifmays.supabase.co',
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvbWNtYnFrbmR0bWxlaWZtYXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg3MDUxNTYsImV4cCI6MTk4NDI4MTE1Nn0.WrbkHFkLzdv-YVIAG0qGbiwlHCqAdqr50OgQ83Y8aXs'
//   )
  
//   supabase.auth.signInWithOAuth({ provider: 'google' })
// }
// export default LoginButton