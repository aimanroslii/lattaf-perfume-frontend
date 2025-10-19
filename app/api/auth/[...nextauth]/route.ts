import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

const handler = NextAuth({
  providers: [
    KeycloakProvider({
      clientId: "angular-client",
      clientSecret: "",
      issuer: "http://localhost:8181/realms/spring-microservices-security-realm",
    }),
  ],
  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.access_token = account.access_token as string;
      }
      return token;
    },
    async session({ session, token }) {
      session.access_token = token.access_token as string;
      return session;
    },
    async redirect({ baseUrl }) {
      return baseUrl + "/";
    },
  },
});

export { handler as GET, handler as POST };
