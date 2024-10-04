import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Login } from "../component/Login.jsx";

export const App = () => {
    return (
        <div className="text-center d-flex justify-content-center align-items-center vh-100">
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="col-12 bg-dark col-md-6 p-0 d-flex align-items-center justify-content-center">
                        <img 
                            src="https://png.pngtree.com/png-vector/20190919/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1742031.jpg" 
                            className="img-fluid h-50 w-50 object-fit-cover rounded-pill" 
                            alt="Landscape" 
                        />
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center bg-light">
                        <Login/>
                        <div className="text-center mt-4">
                            <p className="mb-0">¿No tienes una cuenta?</p>
                            <Link to="/SignUp">
                                <button className="btn btn-link fw-semibold text-info-emphasis p-0">Registrarse</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
