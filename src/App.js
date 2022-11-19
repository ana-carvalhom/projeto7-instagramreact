import Corpo from "./Corpo"
import NavBar from "./NavBar"
import FundoMobile from "./FundoMobile"

export default function App(){
    return (
        <div class="root">
            <NavBar/>
            <Corpo />
            <FundoMobile/>
        </div>
    )
}