import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { CheckoutPage } from "../pages/checkout";
import { FormPayment } from "../pages/payment";
import { Header } from "../components";

export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Header>
              <Home />
            </Header>
          }
        />
        <Route
          path="/checkout"
          element={
            <Header>
              <CheckoutPage />
            </Header>
          }
        />
        <Route path="/payment" element={<FormPayment />} />
      </Routes>
    </Router>
  );
}
