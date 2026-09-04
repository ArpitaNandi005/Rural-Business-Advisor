function LoanRecommendation() {
  const loans = [
    {
      name: "Small Business Loan",
      amount: "Up to ₹5,00,000",
      interest: "Based on eligibility",
      purpose: "Business expansion and working capital",
    },
    {
      name: "Agriculture Business Loan",
      amount: "Up to ₹10,00,000",
      interest: "Based on eligibility",
      purpose: "Agriculture and farming activities",
    },
    {
      name: "Micro Business Loan",
      amount: "Up to ₹2,00,000",
      interest: "Based on eligibility",
      purpose: "Small business needs",
    },
  ];

  return (
    <div className="loan-page">
      <div className="loan-header">
        <div>
          <h1>BIZNEX</h1>
          <p>YOUR AI-POWERED BUSINESS PARTNER</p>
        </div>
      </div>

      <div className="loan-content">
        <h2>🏦 Loan Recommendations</h2>

        <p className="loan-description">
          Explore loan options that may suit your business needs.
        </p>

        <div className="loan-grid">
          {loans.map((loan, index) => (
            <div className="loan-card" key={index}>
              <h3>{loan.name}</h3>

              <p>
                <strong>Loan Amount:</strong> {loan.amount}
              </p>

              <p>
                <strong>Interest:</strong> {loan.interest}
              </p>

              <p>
                <strong>Purpose:</strong> {loan.purpose}
              </p>

              <button>View Details</button>
            </div>
          ))}
        </div>

        <div className="loan-note">
          <strong>Important:</strong> These are sample recommendations for
          the frontend. Actual loan eligibility depends on the lender's
          rules and your application.
        </div>
      </div>
    </div>
  );
}

export default LoanRecommendation;