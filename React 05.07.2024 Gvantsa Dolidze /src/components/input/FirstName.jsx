import './InputStyle.css'

const FirstName = () => {
    return(
        <div className="inline_div">
            <label type="text" for="name" name="name">Enter your First Name:</label>
            <input id="name" />
        </div>
    )
}

export default FirstName;