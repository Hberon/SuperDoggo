import "./style.css"

function Badge ({src}){
    return(
        <div className = "badge-wrapper">
            <img className="badge" src = {src}/>
        </div>
         
    )
}
export default Badge  