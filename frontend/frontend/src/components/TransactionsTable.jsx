function TransactionsTable({transactions}){
    return (
        <div>
            <h2> Recent Transactions</h2>
            <table
                border="1"
                cellPadding="10"
                style={{width: "100%", borderCollapse: "collapse"}}
            >
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((txn)=>(
                      <tr key={txn.id}>
                        <td>{txn.title}</td>
                        <td>${txn.amount}</td>
                        <td>{txn.transaction_type}</td>
                        <td>{txn.category}</td>
                        <td>{txn.transaction_date}</td>
                      </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TransactionsTable;