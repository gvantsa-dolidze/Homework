import './InputStyle.css'

const LastName = () => {
    return(
        <div className="inline_div">
            <label type="text" for="last_name" name="last_name">Enter Your Last Name:</label>
            <input id="last_name" />
        </div>
    )
}

export default LastName;