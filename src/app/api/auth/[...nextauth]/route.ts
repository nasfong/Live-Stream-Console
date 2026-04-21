import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

async function isValidToken(token: string) {
  try {
    const res = await fetch(
      `${process.env.KEYCLOAK_ISSUER}/protocol/openid-connect/userinfo`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.ok;
  } catch {
    return false;
  }
}

const handler = NextAuth({
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID!,
      clientSecret: process.env.KEYCLOAK_SECRET!,
      issuer: process.env.KEYCLOAK_ISSUER!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token; // ✅ raw Keycloak token stored here
        token.refreshToken = account.refresh_token;
        token.idToken = account.id_token;
        return token;
      }

      if (token.error === "InvalidToken") return token;

      if (token.accessToken) {
        const valid = await isValidToken(token.accessToken as string); // ✅ pass only accessToken string

        if (!valid) {
          return { error: "InvalidToken" };
        }
      }

      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.idToken = token.idToken as string;
      session.refreshToken = token.refreshToken as string;
      return session;
    },
  },
  events: {
    async signOut({ token }) {
      // Invalidate Keycloak session
      try {
        const body = new URLSearchParams({
          client_id: process.env.KEYCLOAK_ID!,
          client_secret: process.env.KEYCLOAK_SECRET!,
        });

        // Add refresh token if available for proper token revocation
        if (token?.refreshToken) {
          body.append("refresh_token", token.refreshToken as string);
        }

        await fetch(
          `${process.env.KEYCLOAK_ISSUER}/protocol/openid-connect/logout`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: body.toString(),
          }
        );
      } catch (error) {
        console.error("Keycloak logout failed:", error);
      }
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/signin",
  },
});

export { handler as GET, handler as POST };