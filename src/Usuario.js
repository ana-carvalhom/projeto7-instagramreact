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
        <div className="usuario" data-test="user">
            <img src={!image ? initalImage : image} onClick={editImage} data-test="profile-image"/>
            <div className="texto" data-test="name"> 
                <strong>catanacomics</strong>
                <span data-test="edit-name" >
                   {!userName ? initalName : userName}
                    <ion-icon name="pencil" onClick={editName}></ion-icon>
                </span>
            </div>
        </div>
    )
}