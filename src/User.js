export default function User(props){
    return (
        <div className="usuario">
        <img src={props.profilePicture} />
        <div className="texto">
            <strong>{props.userName}</strong>
            <span>
                {props.user}
                <ion-icon name="pencil"></ion-icon>
            </span>
        </div>
    </div>
    )
}