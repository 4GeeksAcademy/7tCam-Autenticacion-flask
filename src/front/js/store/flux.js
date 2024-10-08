const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//Al refrescarse la pagina, el store vuelve a su estado inical
			message: null,
			usersList: [],
		},
		actions: {
			signUp: async (dataForm) => {
				try {
					let response = await fetch(process.env.BACKEND_URL+"/api/signup", {
						method:"POST",
						body: JSON.stringify(dataForm),
						headers:{"content-type":"application/json"}
					})
					let data = await response.json()
					console.log(data)
					if (data.ok) {
						alert(`Cuenta creada correctamente! Bienvenido ${dataForm.name}!`)
					} else {
						alert("Error, algo salió mal:(")
					}
				} catch (error) {
					console.error(error)
				}
			},
			login: async (dataLogin) => {
				try {
					let response = await fetch(process.env.BACKEND_URL+"/api/login", {
						method:"POST",
						body: JSON.stringify(dataLogin),
						headers:{"content-type":"application/json"}
					})
					let data = await response.json()
					console.log(data)
					if (data.access_token) {
						alert(`Bienvenido ${data.name}!`)
						localStorage.setItem('token', data.access_token)
						localStorage.setItem('name', data.name)
						localStorage.setItem('email', data.email)
					} else {
						alert("Error, algo salió mal:(")
					}
				} catch (error) {
					console.error(error)
				}
			},
			getUsersList: async() => {
				let token = localStorage.getItem('token')
				if (!token) {
					alert("First log in to get a token")
					return
				}
				try {
					let response = await fetch(process.env.BACKEND_URL+"/api/users", {
						headers:{
							Authorization: `Bearer ${token}`,
						}
					})
					let data = await response.json()
					console.log(data)
					if (data.users_list) {
						setStore({...getStore(), usersList: data.users_list})
					} else {
						alert("Error, algo salió mal:(")
					}
				} catch (error) {
					console.error(error)
				}
			},
			logout: () => {
				localStorage.removeItem('token')
				setStore({})
				alert("Se cerró sesión exitosamente!");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
		}
	};
};

export default getState;