import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "./../../styles/index.css"


export const Navbar = () => {
    const{store, actions} = useContext(Context)
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
	const name = localStorage.getItem("name")
    const email = localStorage.getItem("email")
    
    const handleOut = () =>{
        actions.logout()
        navigate("/")
    }
    const handleIn = () =>{
        navigate("/")
    }
	return (
        <nav className="nav flex-column text-start bg-info siderbar">
            {token?
            <ul className="list-group text-center fw-bold bg-info ul-siderbar">
                <li className="list-group-item bg-dark"><a className="nav-link active text-light fw-bold fs-3" aria-current="page" href="#">Perfil</a></li>
                <li className="list-group-item bg-info text-info"><a className="nav-link" href="#"><img src="https://picsum.photos/200/200" className="rounded-circle p-2" alt="" /></a></li>
                <li className="list-group-item bg-dark text-info  border border-white">{name}</li>
                <li className="list-group-item bg-dark text-info border border-white">{email}</li>
                <li className="list-group-item bg-dark text-info"><a className="nav-link text-light" href="#" onClick={handleOut}>Cerrar Sesión</a></li>
            </ul>:
            <ul className="list-group text-center fw-bold bg-info">
                <li className="list-group-item"><a className="nav-link active text-info-emphasis fw-bold fs-3" aria-current="page" href="#">Perfil</a></li>
                <li className="list-group-item"><a className="nav-link" href="#"><img src="https://picsum.photos/200/200?blur" className="rounded-circle p-2" alt="" /></a></li>
                <li className="list-group-item"><a className="nav-link" href="#" onClick={handleIn}>Iniciar Sesión</a></li>
            </ul>}
        </nav>
	);
};