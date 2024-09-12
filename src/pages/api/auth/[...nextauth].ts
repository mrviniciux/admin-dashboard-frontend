import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { JWT } from 'next-auth/jwt';

// Tipagem para o objeto retornado da API
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
          const res = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          const user = (await res.json()) as User;

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
    async session({ session, token }: { session: any; token: JWT }) {
      // Adiciona o accessToken à sessão
      console.log(`adiciona accessToken`, session);
      session.accessToken = '12345679';
      return session;
    },
  },
};

export default NextAuth(authOptions);
