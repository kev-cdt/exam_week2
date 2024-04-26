import { useState } from 'react';
import ExpenseCreate from './components/ExpenseCreate';
import ExpenseList from './components/ExpenseList';
import './App.css';

function App() {
  const [expenseArray, setExpenseArray] = useState([]);

  const addExpense = (value) => {
    setExpenseArray([...expenseArray, value]);
  };

  const deleteByValue = (expense) => {
    setExpenseArray(oldValues => {
      return oldValues.filter(item => item !== expense)
    })
  }

  return (
    <div className="App">
      <h2>Expense Tracker</h2>
      <ExpenseCreate addExpense={addExpense}/>
      <ExpenseList list={expenseArray} deleteExpense={deleteByValue}/>
    </div>
  );
}

export default App;
