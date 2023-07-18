import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import MainRoutes from "./Routes/Routes";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastContainer />
    <MainRoutes />
  </React.StrictMode>
);
