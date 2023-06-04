import "./style.css"

function Avatar ({src}){
    return(
        <div className = "avatar-wrapper">
            <img className="avatar" src = {src}/>
        </div>
    )
}
export default Avatar  