import { NextAuthOptions } from "next-auth"
import github from "next-auth/providers/github"
import google from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  providers: [
    github({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    google({
        clientId: process.env.GOOGLE_CLIENT_ID!,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
    ],
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async session({ token, session }) {
            if (token) {
                session.user.id = token.id;
                session.user.email = token.email;
                session.user.name = token.name;
                session.user.image = token.picture;
            }
            return session;
        }
    }
}
