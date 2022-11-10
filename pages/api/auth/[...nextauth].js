import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from "next-auth/providers/facebook"

//import nextAuth from "next-auth"// weird right?
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
      clientSecret:process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET, //"44fb177cddb3011b68b74e0fef99bee0"//
    })
    
  ],
  callbacks: {
    /*async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
    async session({ session, user, token }) {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
         // Send properties to the client, like an access_token from a provider.
    session.accessToken = token.accessToken
    return session
      } else {
        // Return false to display a default error message
        return false
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account) {
        token.accessToken = account.access_token
        token.id = profile.id
      }
      return token
      }*/
  }//endcallbackss
  
 
  
}
export default NextAuth(authOptions)

