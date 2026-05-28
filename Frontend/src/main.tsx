import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from '@vuer-ai/react-helmet-async';
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

/**
 * SSO NOTE:
 * If you add OAuth / SSO (Google, GitHub, etc.), wrap the app with your
 * AuthProvider here — above <BrowserRouter> so redirects have full router access.
 * Example:
 *   import { AuthProvider } from "./auth/AuthProvider";
 *   <AuthProvider> ... </AuthProvider>
 *
 * SEO NOTE:
 * <HelmetProvider> is already in place. Each page/route should render its own
 * <Helmet> with a unique <title>, <meta name="description">, and canonical <link>.
 * Global defaults (og:site_name, twitter:card, JSON-LD for Organisation) live in App.tsx.
 */

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
