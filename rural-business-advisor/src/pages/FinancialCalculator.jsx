import { useState } from "react";

function FinancialCalculator() {
  const [revenue, setRevenue] = useState("");
  const [expenses, setExpenses] = useState("");
  const [profit, setProfit] = useState(null);

  const calculateProfit = () => {
    const totalRevenue = Number(revenue);
    const totalExpenses = Number(expenses);

    setProfit(totalRevenue - totalExpenses);
  };

  return (
    <div className="calculator-page">
      <div className="calculator-card">

        <h1>BIZNEX</h1>

        <p className="login-subtitle">
          YOUR AI-POWERED BUSINESS PARTNER
        </p>

        <h2>Financial Calculator</h2>

        <p className="calculator-description">
          Calculate your business profit by entering your revenue and expenses.
        </p>

        <label>Total Revenue</label>
        <input
          type="number"
          placeholder="Enter total revenue"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
        />

        <label>Total Expenses</label>
        <input
          type="number"
          placeholder="Enter total expenses"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
        />

        <button onClick={calculateProfit}>
          Calculate Profit
        </button>

        {profit !== null && (
          <div className="profit-result">
            <h3>Your Estimated Profit</h3>
            <p>₹ {profit.toLocaleString()}</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default FinancialCalculator;