import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css.css";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

const testApi = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={testApi}>
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  </QueryClientProvider>
);
