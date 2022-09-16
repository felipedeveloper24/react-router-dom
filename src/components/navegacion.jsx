import React from "react";
import { Link } from "react-router-dom";

const Navegacion = ()=>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/articulos">Articulos</Link>
                </li>
                <li>
                    <Link to="/contacto">Contacto</Link>
                </li>
            </ul>
    </nav>
    )
}

export default Navegacion;