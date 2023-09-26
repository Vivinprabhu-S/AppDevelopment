import React, { useState } from 'react';
import '../Assests/css/Manageexpenses.css';

const Manageexpenses = () => {
    // Initialize state for income and expenses
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);

    // Initialize state for user input
    const [totalAmount, setTotalAmount] = useState('');
    const [selectedType, setSelectedType] = useState('income'); // Default to income
    const [note, setNote] = useState(''); // Initialize state for the note

    // Initialize state for transactions
    const [transactions, setTransactions] = useState([]);

    // Function to handle user input and update income/expenses/transactions
    const handleOKClick = () => {
        const amount = parseFloat(totalAmount);
        if (!isNaN(amount)) {
            if (selectedType === 'income') {
                // Update income
                setIncome(income + amount);
            } else if (selectedType === 'expense') {
                // Update expenses
                setExpenses(expenses + amount);
            }
            // Update transactions
            const transactionType = selectedType === 'income' ? 'Income' : 'Expense';
            setTransactions([
                ...transactions,
                {
                    type: transactionType,
                    amount: amount.toFixed(2),
                    date: new Date().toLocaleDateString(),
                    note, // Include the note in the transaction
                },
            ]);
            // Clear input and note
            setTotalAmount('');
            setNote('');
        }
    };

    return (
        <div>
            <div className="manage-expenses-container">
                <div className="main-container">
                    <div className="income-expenses-container">
                        <div className="income-container">
                            <h2>Income</h2>
                            <p>Total Income: ₹{income.toFixed(2)}</p>
                        </div>
                        <div className="expenses-container">
                            <h2>Expenses</h2>
                            <p>Total Expenses: ₹{expenses.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="user-input-container">
                        <h2>Transaction</h2>
                        <div className="input-section">
                            <label htmlFor="totalAmount">Total Amount (₹): </label>
                            <input
                                type="text"
                                id="totalAmount"
                                value={totalAmount}
                                onChange={(e) => setTotalAmount(e.target.value)}
                            />
                        </div>
                        <div className="input-section">
                            <label>Type: </label>
                            <select
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                            >
                                <option value="income">Income</option>
                                <option value="expense">Expense</option>
                            </select>
                        </div>
                        <div className="input-section">
                            <label>Note: </label>
                            <input
                                type="text"
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                            />
                        </div>
                        <button onClick={handleOKClick}>OK</button>
                    </div>
                </div>

                <div className="transaction-table">
                    <h2>Transaction History</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Amount (₹)</th>
                                <th>Note</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction, index) => (
                                <tr key={index}>
                                    <td>{transaction.date}</td>
                                    <td>{transaction.type}</td>
                                    <td>{transaction.amount}</td>
                                    <td>{transaction.note}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Manageexpenses;
