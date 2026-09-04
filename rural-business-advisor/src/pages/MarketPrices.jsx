function MarketPrices() {
  const marketData = [
    {
      product: "Wheat",
      market: "Local Market",
      price: "₹2,400",
      unit: "per quintal",
    },
    {
      product: "Rice",
      market: "Local Market",
      price: "₹3,200",
      unit: "per quintal",
    },
    {
      product: "Tomato",
      market: "Local Market",
      price: "₹25",
      unit: "per kg",
    },
    {
      product: "Potato",
      market: "Local Market",
      price: "₹22",
      unit: "per kg",
    },
  ];

  return (
    <div className="market-page">
      <div className="market-header">
        <div>
          <h1>BIZNEX</h1>
          <p>YOUR AI-POWERED BUSINESS PARTNER</p>
        </div>
      </div>

      <div className="market-content">
        <h2>Market Prices</h2>

        <p className="market-description">
          View sample market prices for common products.
        </p>

        <div className="market-table-container">
          <table className="market-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Market</th>
                <th>Price</th>
                <th>Unit</th>
              </tr>
            </thead>

            <tbody>
              {marketData.map((item, index) => (
                <tr key={index}>
                  <td>{item.product}</td>
                  <td>{item.market}</td>
                  <td>{item.price}</td>
                  <td>{item.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MarketPrices;