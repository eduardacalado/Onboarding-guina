import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app.tsx";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/app/data/graphql/client.ts";
import { Toaster } from "./app/atomic/atm.toast/sonner.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>
);
