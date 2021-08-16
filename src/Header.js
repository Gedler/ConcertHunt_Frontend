import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./header.css"


function Header() {


    let history = useHistory();
  
    function handleClick() {
      history.push("/");
    }






return(

    <div className="Header">
        <h1 className="header-text">Concert Hunt</h1>
        <nav classname="navbar">
            
            <Link to="/main"><a href="#">Home|</a></Link>
            <Link to="lounge"><a href="/lounge">Lounge|</a></Link>
            <Link to="/artists"><a href="/artists">Artists|</a></Link>
            <Link to="/profile"><a href="#">Profile|</a>
            <button type="button" onClick={handleClick}>
                        Logout
    </button>
        </Link>
        </nav>
    </div>

)

}




export default Header;