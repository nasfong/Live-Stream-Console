import { GraphQLClient } from 'graphql-request'

// This only runs on the server — safe to use cookies/headers here
export const serverGqlClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_HTTP_URL!,
  {
    headers: {
      // Add server-side auth here if needed
      // Authorization: `Bearer ${token}`
    },
  }
)