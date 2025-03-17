import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.SERVER_URL,
  cache: new InMemoryCache(),
});
