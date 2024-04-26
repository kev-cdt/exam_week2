import { useForm } from 'react-hook-form';

function ExpenseCreate (props) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const addExpense = data => {
        props.addExpense(data)
        reset();
    };

    return (
        <div className='form-container'>
            <form className="form" onSubmit={handleSubmit(addExpense)}>
            <p className="form-title">Add an expense</p>
            <div>
                <div className='input-container'>
                    <label>Description</label>
                    {errors.desc && <p style={{ color: 'red', margin: '0' }}>Description can't be empty</p>}
                    <input {...register('desc', { required: true })} />
                </div>
                <div className='input-container'>
                    <label>Amount</label>
                    {errors.amount && <p style={{ color: 'red', margin: '0' }}>Amount can't be empty</p>}
                    <input {...register('amount', { required: true })} type='number' />
                </div>
                <div className='input-container'>
                    <label>Category</label>
                    {errors.category && <p style={{ color: 'red', margin: '0' }}>Choose a category</p>}
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
