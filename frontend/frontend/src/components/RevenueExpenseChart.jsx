import { LineChart, Line, 
         XAxis, YAxis, 
         CartesianGrid, Tooltip, 
         Legend, ResponsiveContainer } from "recharts";

function RevenueExpenseChart({data}){
    return (
        <div style={{ marginBottom: "2rem" }}>
            <h2>Revenue vs Expense</h2>
            <ResponsiveContainer width = "100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#00b894" />
                    <Line type="monotone" dataKey="expense" stroke="#d63031" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default RevenueExpenseChart;