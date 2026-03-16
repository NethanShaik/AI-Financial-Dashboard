import {useState} from "react";
import api from "../services/api";

function TransactionForm({onTransactionAdded}) {
    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        transaction_type: "expense",
        category: "operations",
        transaction_date: "",
        description: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    function handleChange(event) {
        const {name, value} = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]:value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        setError("");

        try {
            await api.post("/finance/transactions/", formData);

            setFormData({
                title: "",
                amount: "",
                transaction_type: "expense",
                category: "operations",
                transaction_date: "",
                description: "",
            });
            onTransactionAdded();
        } catch (err) {
            console.error("Error adding transaction:", err);
            setError("Failed to add transaction.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div style={containerStyle}>
            <h2>Add Transaction</h2>

            <form onSubmit={handleSubmit} style={formStyle}>
                <input
                    tyle="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                />

                <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                />

                <select
                    name="transaction_type"
                    value={formData.transaction_type}
                    onChange={handleChange}
                    style={inputStyle}
                >
                    <option value="expense">Expense</option>
                    <option value="revenue">Revenue</option>
                </select>

                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    style={inputStyle}
                >
                    <option value="sales">Sales</option>
                    <option value="marketing">Marketing</option>
                    <option value="operations">Operations</option>
                    <option value="salary">Salary</option>
                    <option value="software">Software</option>
                    <option value="other">Other</option>
                </select>

                <input 
                    type="date"
                    name="transaction_date"
                    value={formData.transaction_date}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    style={inputStyle}
                />
                <button type="submit" disabled={loading} style={buttonStyle}>
                    {loading ? "Saving...":"Add Transaction"}
                </button>
                {error && <p> style={{color:"red"}}{error}</p>}
            </form>
        </div>
    );
}

const containerStyle = {
    background: "#fff",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    marginBottom: "2rem",
  };
  
  const formStyle = {
    display: "grid",
    gap: "1rem",
  };
  
  const inputStyle = {
    padding: "0.75rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  };
  
  const buttonStyle = {
    padding: "0.9rem",
    border: "none",
    borderRadius: "8px",
    background: "#111827",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
  };

  export default TransactionForm;