import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import client from "@/db"; 
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
        const { username, password } = credentials;

      
        const user = await client.user.findUnique({
          where: { email: username }, 
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
          email: user.email,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ user, token }: any) => {
      if (user) {
        token.uid = user.id;
        token.email = user.email; 
      }
      return token;
    },
    session: ({ session, token }: any) => {
      if (session.user) {
        session.user.id = token.uid;
        session.user.email = token.email; 
      }
      return session;
    },
    async signIn({ user, account, profile }: any) {
      if (account.provider === 'google' || account.provider === 'github') {
        const existingUser = await client.user.findUnique({
          where: { email: profile.email }, 
        });

      
        if (!existingUser) {
          await client.user.create({
            data: {
              username: profile.name || profile.login, 
              email: profile.email,
            
            },
          });
        }
      }
      return true; 
    },
  },
 
  // pages: {
  //   signIn: "/signin",
  // }
};
