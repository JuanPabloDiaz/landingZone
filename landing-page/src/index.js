import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Tutorial for the NotificationText component: https://www.youtube.com/watch?v=c8ZtJcQ9gpY
import { NotificationProvider } from "./context/NotificationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </React.StrictMode>
);
