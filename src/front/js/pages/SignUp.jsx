import React from "react";
import { Link } from "react-router-dom";
import { Form } from "../component/Form.jsx";
import "./../../styles/index.css"

export const SignUp = () => {
    return (
        <div className="container-fluid  d-flex flex-column align-items-center justify-content-center vh-100 container-form">
            <div className="w-100 bg-dark container-forn" style={{ maxWidth: "400px" }}>
                <div className="p-4 rounded-5 shadow-lg ">
                    <Form />
                    <div className="text-center mt-4">
                        <p className="text-light mb-0">¿Tienes una cuenta?</p>
                        <Link to="/">
                            <button className=" text-light btn btn-link fw-semibold text-info-emphasis p-0">Iniciar sesión</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
