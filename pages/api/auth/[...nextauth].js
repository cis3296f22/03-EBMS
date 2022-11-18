import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

/* PUBLISHING
export default NextAuth({
  secret: process.env.JWT_SECRET,
  providers: [
    // OAuth authentication providers
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  debug: true,
})
*/


/* TESTING */
export default NextAuth({
  secret: process.env.JWT_SECRET,
  providers: [
    // OAuth authentication providers
    GoogleProvider({
      clientId: process.env.TESTING_ID,
      clientSecret: process.env.TESTING_SECRET,
    }),
  ],
  debug: true,
})