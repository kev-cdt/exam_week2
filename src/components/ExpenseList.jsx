import { useState } from 'react';
import ExpenseDelete from './ExpenseDelete';

const ExpenseList = (props) => {
    const [choosenCategory, setChoosenCategory] = useState('');

    const filteredExpense = props.list.filter((product) =>
        product.category.toLowerCase().includes(choosenCategory)
    );

    return (
            <div className='list-container'>
                <div>
                    <h3>Filters : </h3>
                    <select onChange={(e) => setChoosenCategory(e.target.value)}>
                        <option value="">All categories</option>
                        <option value="groceries">Groceries</option>
                        <option value="utilities">Utilities</option>
                        <option value="entertainement">Entertainement</option>
                    </select>
                </div>
                {filteredExpense.map((item, index) =>
                    <div key={index} className={index} className="card">
                        <h3>{item.desc}</h3>
                        <p>{item.amount} €</p>
                        <p>{item.category}</p>
                        <ExpenseDelete expense={item} deleteExpense={props.deleteExpense}/>
                    </div>)}
            </div>
            
    );
}

export default ExpenseList;