import User from "./User"
import React from "react"

export default function Usuario(){
    
    const [image, setImage] = React.useState("assets/img/catanacomics.svg")
    const [userName, setUserName] = React.useState("Catana")

    function editName(){
        const newName = prompt("Qual o seu novo nome?")
        setUserName(newName)
    }


    function editImage(){
        const newImage = prompt("Qual é a sua nova imagem?")
        setImage(newImage)
    }

    return (
        <div class="usuario">
            <img src={image} onClick={editImage}/>
            <div class="texto">
                <strong>catanacomics</strong>
                <span>
                    {userName}
                    <ion-icon name="pencil" onClick={editName}></ion-icon>
                </span>
            </div>
        </div>
    )
}