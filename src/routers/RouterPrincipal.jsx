import React from "react";
import {Routes, Route,BrowserRouter} from "react-router-dom";
import { Articulos } from "../components/articulos";

import { Inicio } from "../components/inicio";

export const RouterPrincipal = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/articulos" element={<Articulos/>} />
            </Routes>
        
        </BrowserRouter>
    )    
};