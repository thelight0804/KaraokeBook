//react router : npm install react-router-dom@6
//redux toolkit : npm install @reduxjs/toolkit react-redux
//redux persist : npm install redux-persist
//axios : npm install axios
//react query : npm install @tanstack/react-query

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

//react redux, persist
import { Provider } from "react-redux";
import { store, persistor } from "./data/Store";
import { PersistGate } from "redux-persist/integration/react";

//react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}> 
        <BrowserRouter>
          {/* <React.StrictMode> */}
            <App />
          {/* </React.StrictMode> */}
        </BrowserRouter>
      </QueryClientProvider>
    </PersistGate>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
