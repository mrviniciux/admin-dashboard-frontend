import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';

interface User {
  id: string;
  email: string;
  token: string; // O JWT retornado pela API
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        try {
          // Faz a chamada para a rota local /api/login
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          const user = (await res.json()) as User;

          console.log(`#### user ###`, user);

          // Verifica se a resposta contém um token
          if (res.ok && user.token) {
            console.log(`retorna user`, user);
            return user; // Retorna o objeto usuário, incluindo o token
          }

          return null;
        } catch (error) {
          console.error('Erro na autenticação:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session }: { session: any; token: JWT }) {
      // Adiciona o accessToken à sessão
      console.log(`adiciona accessToken`, session);
      session.accessToken = '12345679';
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
