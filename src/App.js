import Corpo from "./Corpo"
import NavBar from "./NavBar"
import FundoMobile from "./FundoMobile"

export default function App(){
    return (
        <div className="root">
            <NavBar/>
            <Corpo />
            <FundoMobile/>
        </div>
    )
}