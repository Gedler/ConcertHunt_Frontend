import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


function Header() {


    let history = useHistory();
  
    function handleClick() {
      history.push("/");
    }






return(

    <div classname="Header">
        <h1>Concert Hunt</h1>
        <nav classname="Header">
            
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