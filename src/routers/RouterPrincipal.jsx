import React from "react";
import {Routes, Route,BrowserRouter} from "react-router-dom";
import { Articulos } from "../components/articulos";
import { Contacto } from "../components/contacto";

import { Inicio } from "../components/inicio";

export const RouterPrincipal = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/articulos" element={<Articulos/>} />
                <Route path="/contacto" element={<Contacto/>} />
            </Routes>
        
        </BrowserRouter>
    )    
};