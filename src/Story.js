export default function Story(props) {


    return (
        <div className="story">
            <div className="imagem">
                <img src={props.image} />
            </div>
            <div className="usuario">
                {props.userName}

            </div>

        </div>
    )
}

