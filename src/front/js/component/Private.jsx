import React from "react";

export const Private = () => {
	const token = localStorage.getItem("token")
	const name = localStorage.getItem("name")
	return (
		<div className="text-center p-2 bg-dark">
			{token ?
				<div className="rounded-5">
					<h2 className="text-info-emphasis text-light fst-italic fw-bold  display-1">Bienvenido {name}</h2>
					{/* <img src="https://picsum.photos/200/200/?blur" className="rounded-4 p-2" alt="" /> */}
					<img src="https://picsum.photos/200/200" className="rounded-4 p-2" alt="" />
					{/* <img src="https://picsum.photos/200/200?grayscale" className="rounded-4 p-2" alt="" /> */}
				</div> : <h3 className="text-info-emphasis fst-italic fw-light display-5">Registrese para ver fotos de los usuarios</h3>
			}
		</div>
	);
};