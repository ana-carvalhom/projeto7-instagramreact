export default function User(props){
    return (
        <div class="usuario">
        <img src={props.profilePicture} />
        <div class="texto">
            <strong>{props.userName}</strong>
            <span>
                {props.user}
                <ion-icon name="pencil"></ion-icon>
            </span>
        </div>
    </div>
    )
}