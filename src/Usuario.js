import User from "./User"
import React from "react"

export default function Usuario() {
    
    const initalImage = "assets/img/catanacomics.svg"
    const initalName = "Catana"

    const [image, setImage] = React.useState(initalImage)
    const [userName, setUserName] = React.useState(initalName)

    function editName() {
        const newName = prompt("Qual o seu novo nome?")
        setUserName(newName)
    }


    function editImage() {
        const newImage = prompt("Qual é a sua nova imagem?")
        setImage(newImage)
    }

    return (
        <div class="usuario">
            <img src={!image ? initalImage : image} onClick={editImage} />
            <div class="texto">
                <strong>catanacomics</strong>
                <span>
                   {!userName ? initalName : userName}
                    <ion-icon name="pencil" onClick={editName}></ion-icon>
                </span>
            </div>
        </div>
    )
}