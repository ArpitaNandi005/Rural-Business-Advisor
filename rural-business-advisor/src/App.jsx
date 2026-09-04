import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BusinessProfile from "./pages/BusinessProfile";
import Dashboard from "./pages/Dashboard";
import FinancialCalculator from "./pages/FinancialCalculator";
import MarketPrices from "./pages/MarketPrices";
import AIAdvisor from "./pages/AIAdvisor";
import LoanRecommendation from "./pages/LoanRecommendation";
import "./App.css";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/business-profile"
        element={<BusinessProfile />}
      />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route
        path="/financial-calculator"
        element={<FinancialCalculator />}
      />

      <Route path="/market-prices" element={<MarketPrices />} />
      <Route path="/ai-advisor" element={<AIAdvisor />} />
      <Route
        path="/loan-recommendation"
        element={<LoanRecommendation />}
      />

    </Routes>
  );
}

export default App;