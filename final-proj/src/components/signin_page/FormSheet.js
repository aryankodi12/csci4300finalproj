import './FormSheet.css';

function FormSheet() {
    <form className='user-input-form'>
        {/* <label>Enter your name:
                        <input type="text" />
                    </label> */}
        <input type="text" placeholder="Username" className='username'></input>
        <input type="text" placeholder="Password" className='password'></input>
        {/* <input type="submit" className='next-button'> NExt </input> */}
        <button type="submit" className='next-button'> NEXT</button>

        {/* <textarea cols="50">USERNAME</textarea> */}
    </form>
}

export default FormSheet;