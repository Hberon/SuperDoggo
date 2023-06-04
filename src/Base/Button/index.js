import "./style.css"

function Button ({text, type}){
    return(
        <div>
            
        <button className= {type === "action" ? "action-button" : "main-button"}>
            

       {text.toUpperCase()}

    </button>
        </div>

    )
    
}

export default Button 