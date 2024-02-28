import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/style.css";
import "./styles/reset.css"
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter basename="portfolio" >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
);
