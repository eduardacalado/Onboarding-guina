import { useAuthStore, useUserStore } from "@/app/stores";
import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_SERVER_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = useAuthStore.getState().token;

  return {
    headers: {
      ...headers,
      Authorization: token,
    },
  };
});

const logoutMiddleware = onError(({ graphQLErrors }) => {
  graphQLErrors?.forEach((element) => {
    if ("code" in element && element.code === 401) {
      localStorage.removeItem("user-storage");
      localStorage.removeItem("auth-storage");

      useAuthStore.getState().clearToken();
      useUserStore.getState().clearUser();

      window.location.replace("/login");
    }
  });
});

export const client = new ApolloClient({
  link: from([authLink, httpLink, logoutMiddleware]),
  cache: new InMemoryCache(),
});
