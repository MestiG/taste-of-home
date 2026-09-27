import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { RecipeProvider } from "./context/RecipeContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <RecipeProvider>
          <App />
        </RecipeProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);