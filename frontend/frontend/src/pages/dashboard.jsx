import {useState, useEffect} from "react";
import api from "../services/api.js";
import SummaryCards from "../components/SummaryCards";
import RevenueExpenseChart from "../components/RevenueExpenseChart";
import TransactionsTable from "../components/TransactionsTable";

function Dashboard () {
    const [summary, setSummary] = useState(null);
    const [monthlyData, setMonthlyData] = useState([]);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const summaryRes = await api.get("/analytics/summary/");
                const monthlyRes = await api.get("/analytics/monthly-overview/");
                const transactionRes = await api.get("/finance/transactions/");

                setSummary(summaryRes.data);
                setMonthlyData(monthlyRes.data);
                setTransactions(transactionRes.data);
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div style={{padding:"2rem"}}>
            <h1>AI Financial Dashboard</h1>
            <SummaryCards summary={summary} />
            <RevenueExpenseChart data={monthlyData} />
            <TransactionsTable transactions={transactions} />
        </div>
    );
}

export default Dashboard;