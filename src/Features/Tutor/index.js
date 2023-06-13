import Text from "../../Base/Text"
import Title from "../../Base/Title"
import Button from "../../Base/Button"
import "./style.css"
import Avatar from "../../Base/Avatar"
import Badge from "../../Base/Badge"
import Tag from "../../Base/Tag"
import React, {useState} from "react";



function Tutor ({name, description, avatarSrc, badgeSrc}){
    const [buttonClicked, buttonClick] = useState("no button clicked");
    return(
    <div>
        <div className = "dogprofile">
            <div className = "avatar">
                <Avatar src = {avatarSrc}/>
            </div>
            <div className = "doginfo">
                <Title text = {name}/>
                <Title text = {buttonClicked}/>
                <Badge src = {badgeSrc}/>
                <div className = "tags">
                    <Tag text={"1000+ tail wags"}/>
                    <Tag text ={"Superdoggo"} showhat={true}/>
                </div>
            </div>
        </div>

        
        
        <div className = "dogsdescription">
            <Text text = {description}/>
        </div>
        <div className = "dogsbutton">
            <Button onClick={() => buttonClick("porra")} text = "Porra!!! " type = "action"/>
            <Button onClick={() => {console.log("caralho")}} text = "Caralho!!! "/>
        </div>
    </div>
    )
    
}

export default Tutor 