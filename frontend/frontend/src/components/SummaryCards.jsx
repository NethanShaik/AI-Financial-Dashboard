function SummaryCards({summary}) {
    if(!summary) return <p> Loading Summary...</p>;

    return (
        <div style={{display:"flex", gap:"1rem", margin:"2rem 0"}}>
            <div style={cardStyle}>
                <h3>Total Revenue</h3>
                <p>${summary.total_revenue}</p>
            </div>
            <div style={cardStyle}>
                <h3>Net Profit</h3>
                <p>${summary.total_expense}</p>
            </div>
            <div style={cardStyle}>
                <h3>Transactions</h3>
                <p>${summary.transaction_count}</p>
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

export default SummaryCards;