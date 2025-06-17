import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalErrorBoundary from "./boundary/GlobalErrorBoundary";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GlobalErrorBoundary>
    <BrowserRouter>
    {/* <HashRouter> */}
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    {/* </HashRouter> */}
    </BrowserRouter>
  </GlobalErrorBoundary>
);
