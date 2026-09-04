import { useNavigate } from "react-router-dom";
function Dashboard() {
     const navigate = useNavigate();
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div>
          <h1>BIZNEX</h1>
          <p>YOUR AI-POWERED BUSINESS PARTNER</p>
        </div>

        <button className="logout-button">Logout</button>
      </div>

      <div className="dashboard-content">
        <h2>Business Dashboard</h2>
        <p className="dashboard-welcome">
          Welcome to your business management dashboard.
        </p>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>💰 Financial Calculator</h3>
            <p>
              Calculate profit, expenses, revenue and other business
              financial information.
            </p>
            <button onClick={() => navigate("/financial-calculator")}>
            Open Calculator
            </button>
          </div>

          <div className="dashboard-card">
            <h3>📊 Market Prices</h3>
            <p>
              Check current market prices for products and commodities.
            </p>
            <button onClick={() => navigate("/market-prices")}>
             View Market Prices
            </button>
          </div>

          <div className="dashboard-card">
            <h3>🤖 AI Advisor</h3>
            <p>
              Get AI-powered suggestions and guidance for your business.
            </p>
            <button onClick={() => navigate("/ai-advisor")}>
            Ask AI Advisor
            </button>
          </div>

          <div className="dashboard-card">
            <h3>🏦 Loan Recommendation</h3>
            <p>
              Find suitable loan options based on your business profile.
            </p>
            <button onClick={() => navigate("/loan-recommendation")}>
                View Loan Options
                </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;