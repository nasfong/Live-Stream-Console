import { HttpLink, split, ApolloClient, InMemoryCache } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'

function makeApolloClient() {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_HTTP_URL,
  })

  const wsLink = typeof window !== 'undefined'
    ? new GraphQLWsLink(
        createClient({ url: process.env.NEXT_PUBLIC_GRAPHQL_WS_URL! })
      )
    : null

  const link = wsLink
    ? split(
        ({ query }) => {
          const def = getMainDefinition(query)
          return def.kind === 'OperationDefinition' && def.operation === 'subscription'
        },
        wsLink,
        httpLink
      )
    : httpLink

  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
  })
}

// Singleton — reuse same client across CSR navigations
let client: ApolloClient | null = null

export function getApolloClient() {
  if (!client) client = makeApolloClient()
  return client
}