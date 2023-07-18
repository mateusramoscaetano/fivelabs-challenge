import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { CheckoutPage } from "../pages/checkout";
import { FormPayment } from "../pages/payment";

export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment" element={<FormPayment />} />
      </Routes>
    </Router>
  );
}
