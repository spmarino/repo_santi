import "./NavBar.css"
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import logo from "../images/logoinstintoanimal.jpg"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "./CartContext";

function NavBar () {

   const {cantidad_total} = useContext (contexto)


    return(
        <div className="navBar--Container">
            <header className="header">
                <Link to="/">
                <img src={logo} alt="logo" className="navLogo"/>
                </Link>
                
            </header>
            <nav className="navBar">
                <Link className="navBar--Word" to={"/"}>Inicio</Link>
                <Link className="navBar--Word" to={"/category/gorras"}>Gorras</Link>
                <Link className="navBar--Word" to={"/category/buzos"}>Buzos</Link>
                <Link className="navBar--Word" to={"/cart"}> <ShoppingCartOutlinedIcon/> {cantidad_total} </Link>
                
            </nav>
        </div>
    )
}

export default NavBar;