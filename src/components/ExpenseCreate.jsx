import { useForm } from 'react-hook-form';

function ExpenseCreate (props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const addExpense = data => {
        props.addExpense(data)
    };

    return (
        <div className='form-container'>
            <form className="form" onSubmit={handleSubmit(addExpense)}>
            <p className="form-title">Add an expense</p>
            <div>
                <div className='input-container'>
                    <label>Description</label>
                    <input {...register('desc', { required: true })} />
                </div>
                <div className='input-container'>
                    <label>Amount</label>
                    <input {...register('amount', { required: true })} type='number' />
                </div>
                <div className='input-container'>
                    <label>Category</label>
                    <select {...register('category', { required: true })}>
                        <option></option>
                        <option>Groceries</option>
                        <option>Utilities</option>
                        <option>Entertainement</option>
                    </select>
                </div>
            </div>
            <div>
                <button className='submit'>Submit</button>
            </div>
            </form>
        </div>
    );
}

    export default ExpenseCreate;
