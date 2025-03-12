import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://onboard-server-kanban-zf2bj2uvta-uc.a.run.app/graphql",
  cache: new InMemoryCache(),
});
