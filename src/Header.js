import { Link } from "react-router-dom";

function Header() {








return(

    <div classname="Header">
        <h1>Concert Hunt</h1>
        <nav classname="Header">
            
            <Link to="/main"><a href="#">Home|</a></Link>
            <Link to="lounge"><a href="/lounge">Lounge|</a></Link>
            <Link to="/artists"><a href="/artists">Artists|</a></Link>
            <Link to="/profile"><a href="#">Profile|</a>
        </Link>
        </nav>
    </div>

)

}




export default Header;