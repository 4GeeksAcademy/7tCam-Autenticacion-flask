import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Private } from "../component/Private.jsx";
import { Navbar } from "../component/Navbar.jsx";
import { UsersList } from "../component/UsersList.jsx";

export const PrivateUser = () => {
	return (
		<div className="text-center mt-0 bg-dark" style={{ height: '100vh' }}>
			<div className="row h-100">
				
				<div className="col-md-9 rounded-5">
					<Private/>
					<UsersList/>
				</div>
                <div className="col-md-3 d-flex align-items-center px-0" >
                {/* style={{overflowX: 'hidden'}} */}
                    <Navbar/>
                </div>
			</div>
		</div>
	);
};