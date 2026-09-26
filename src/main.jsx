import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "./components/ui/provider.jsx";
import { ErrorBoundary } from "react-error-boundary";
import "./index.css";
import ErrorFallback from "./components/ErrorsFallback.jsx";
import ScrollLinked from "./components/ScrollLinked.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ScrollLinked>
            <App />
          </ScrollLinked>
        </ErrorBoundary>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
);
