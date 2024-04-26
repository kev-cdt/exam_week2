function ExpenseDelete(props) {

    const removeExpense = (expense) => {
        props.deleteExpense(expense)
    };

    return (
        <button onClick={() => removeExpense(props.expense)}>Delete</button>
    );
}

export default ExpenseDelete