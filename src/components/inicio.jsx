import React from "react";
import { Link } from "react-router-dom";

export const Inicio = ()=>{
    return(
        <div>
            <nav>
                <ul>
                    <li></li>
                </ul>
            </nav>
            <Link to="/articulos" >Ir a articulos</Link>
        </div>
    )
};