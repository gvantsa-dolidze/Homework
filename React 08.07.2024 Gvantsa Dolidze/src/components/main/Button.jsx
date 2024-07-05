const Button = (params) => {
    
if(params.theme === "primary"){
    return (
        <div>
            <button className="btn btn-secondary">Click</button>
        </div>
    )
} else if(params.theme === "secondary") {
    return (
        <div>
            <button className="btn btn-outline">Click</button>
        </div>
    )
} else {
    return (
        <div>
            <button className="btn btn-primary">Click</button>
        </div>
    )
}
}





    // return (
    //     <div>
    //         <button className="btn btn-primary">Click</button>
    //     </div>
    // )


export default Button; 