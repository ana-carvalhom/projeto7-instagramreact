import React from "react"

export default function Post(props){

    
    const [colorLike, setLike] = React.useState("initial");
    const [nameIcon, setNameIcon] = React.useState("heart-outline");

    function likePost(){
            if(colorLike === 'initial'){
                setNameIcon("heart");
                setLike("red");
            } else {
                setNameIcon("heart-outline");
                setLike("initial")
            }
        }

    return(
        <div className="post">
        <div className="topo">
            <div className="usuario">
                <img src={props.userImage} />
                {props.userName}
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div className="conteudo">
            <img src={props.postImage} onClick={likePost} />
        </div>

        <div className="fundo">
            <div className="acoes">
                <div>
                    <ion-icon name={nameIcon} class={colorLike} onClick={likePost}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div className="curtidas">
                <img src={props.likedImage} />
                <div className="texto">
                    Curtido por <strong>{props.likedBy}</strong> e <strong>outras {props.likes} pessoas</strong>
                </div>
            </div>
        </div>
    </div>
    )
}