import Sugestao from "./Sugestao"

export default function Sugestoes (){
    const sugestoes =[
        {
            image:"assets/img/bad.vibes.memes.svg",
            userName:"bad.vibes.memes",
            status:"Segue você",
        },
        {
            image:"assets/img/chibirdart.svg",
            userName:"chibirdart",
            status:"Segue você",
        },
        {
            image:"assets/img/razoesparaacreditar.svg",
            userName:"razoesparaacreditar",
            status:"Novo no Instagram",
        },
        {
            image:"assets/img/adorable_animals.svg",
            userName:"adorable_animals",
            status:"Segue você",
        },
        {
            image:"assets/img/smallcutecats.svg",
            userName:"smallcutecats",
            status:"Segue você",
        },
    ]

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
        {sugestoes.map((sugestao => <Sugestao
        key={sugestao.userName} 
        image={sugestao.image} 
        userName={sugestao.userName}
        status={sugestao.status} 
        />))}
                    
        </div>
    )
}