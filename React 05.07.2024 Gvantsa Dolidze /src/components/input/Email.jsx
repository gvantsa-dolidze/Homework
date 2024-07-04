import './InputStyle.css'

const Email = () => {
    return(
        <div className="inline_div">
            <label type='email' for="email" name="email">Enter Your Email:</label>
            <input  id="email" />
        </div>
    )
}

export default Email;