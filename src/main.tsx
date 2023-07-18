import ReactDOM from "react-dom/client";

import "./index.css";
import MainRoutes from "./Routes/Routes";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <ToastContainer />
    <MainRoutes />
  </>
);
