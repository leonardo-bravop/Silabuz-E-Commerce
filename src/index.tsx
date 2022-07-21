import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ShoppingCartProvider } from "contexts/ShoppingCartContext";
import '@algolia/autocomplete-theme-classic';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ShoppingCartProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>
              <App />
            </Layout>
          </ThemeProvider>
        </ShoppingCartProvider>
      </AuthProvider>
    </BrowserRouter>
  // </React.StrictMode>
);
