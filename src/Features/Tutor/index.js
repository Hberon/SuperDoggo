import Text from "../../Base/Text"
import Title from "../../Base/Title"
import Button from "../../Base/Button"
import "./style.css"
import Avatar from "../../Base/Avatar"
import Badge from "../../Base/Badge"
import Tag from "../../Base/Tag"

function Tutor ({name, description, avatarSrc, badgeSrc}){
    return(
    <div>
        <div className = "dogprofile">
            <div className = "avatar">
                <Avatar src = {avatarSrc}/>
            </div>
            <div className = "doginfo">
                <Title text = {name}/>
                <Badge src = {badgeSrc}/>
                <Tag text={"1000+ tail wags"}/>
                <Tag text ={"Superdoggo"} showhat={true}/>
            </div>
        </div>

        
        
        <div className = "dogsdescription">
            <Text text = {description}/>
        </div>
        <div className = "dogsbutton">
            <Button text = "Porra!!! " type = "action"/>
            <Button text = "Caralho!!! "/>
        </div>
    </div>
    )
    
}

export default Tutor 