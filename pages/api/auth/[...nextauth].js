import NextAuth from "next-auth";
// import Providers from "next-auth/providers";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth ({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
});