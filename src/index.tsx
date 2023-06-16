import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css.css";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "react-query";

const testApi = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={testApi}>
    <Router />
  </QueryClientProvider>
);
