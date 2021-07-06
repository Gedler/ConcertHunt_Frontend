import { Link } from "react-router-dom";

function Header() {








return(

    <div classname="Header">
        <h1>Concert Hunt</h1>
        <nav classname="Header">
            
            <a href="/main">Home|</a>
            <a href="/lounge">Lounge|</a>
            <a href="/artists">Artists|</a>
            <a href="#">Profile|</a>
        
        </nav>
    </div>

)

}




export default Header;