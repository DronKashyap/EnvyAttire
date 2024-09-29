import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from "next-auth/providers/github";
import client from "@/db"; // Ensure this imports your Prisma client correctly
import bcrypt from 'bcrypt';

export const NEXT_AUTH_CONFIG = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Email', type: 'text', placeholder: '' },
        password: { label: 'Password', type: 'password', placeholder: '' },
      },
      async authorize(credentials: any) {
        const { username, password} = credentials;

        // Fetch the user from the database using email
        const user = await client.user.findUnique({
          where: { email: username }, // Use email for login
        });

        if (!user) {
          throw new Error('No user found with the provided email.');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password as string);
        if (!isPasswordValid) {
          throw new Error('Incorrect password.');
        }

        return {
          id: user.id.toString(),
          username: user.username,
          email: user.email, // Include email for consistency
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || ""
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ user, token }: any) => {
      if (user) {
        token.uid = user.id;
        token.email = user.email; // Save email in token for further use
      }
      return token;
    },
    session: ({ session, token }: any) => {
      if (session.user) {
        session.user.id = token.uid;
        session.user.email = token.email; // Add email to session
      }
      return session;
    },
    async signIn(user:any, account:any, profile:any) {
      // Handle sign in for OAuth users
      if (account.provider === 'google' || account.provider === 'github') {
        const existingUser = await client.user.findUnique({
          where: { email: profile.email }, // Find user by email
        });

        // If the user doesn't exist, create a new entry
        if (!existingUser) {
          await client.user.create({
            data: {
              username: profile.name || profile.login, // Use the name or login as username
              email: profile.email,
              // No password for OAuth users
            },
          });
        }
      }
      return true; // Allow sign-in
    },
  },
  // Uncomment and customize for custom sign-in page
  // pages: {
  //   signIn: "/signin",
  // }
};
