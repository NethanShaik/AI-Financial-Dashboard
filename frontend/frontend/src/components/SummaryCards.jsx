function SummaryCards({summary}) {
    if(!summary) return <p> Loading Summary...</p>;

    return (
        <div style={{display:"flex", justifyContent:"center", gap:"1rem", margin:"2rem 0", flexWrap:"wrap"}}>
            <div style={{cardStyle, borderTop: "5px solid #16a34a"}}>
                <h3>Total Revenue</h3>
                <p style={valueStyle}>${summary.total_revenue}</p>
            </div>
            <div style={{cardStyle, borderTop: "5px solid #dc2626"}}>
                <h3>Expense</h3>
                <p style={valueStyle}>${summary.total_expense}</p>
            </div>
            <div style={{cardStyle, borderTop: "5px solid #dc2626"}}>
                <h3>Net Profit</h3>
                <p style={valueStyle}>${summary.net_profit}</p>
            </div>
            <div style={{cardStyle, borderTop: "5px solid #2563eb"}}>
                <h3>Transactions</h3>
                <p style={valueStyle}>{summary.transaction_count}</p>
            </div>
        </div>
    );
}

const cardStyle = {
    
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "1rem",
    minWidth: "180px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
};

const valueStyle = {
  fontSize: "1.4rem",
  fontWeight: "bold",
  marginTop: "0.5rem",
};

export default SummaryCards;