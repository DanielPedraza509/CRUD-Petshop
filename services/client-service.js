//AJAX ---> Asincronus Javascript and XML 
//Abrir http --> http.open(metodo, url)
//CRUD   -- Metodos
//Create -- Post 
//Read   -- Get
//Update -- Put/ Patch 
//Delete -- Delete 

//Fetch API
const listaClientes = () => fetch("http://localhost:3000/perfil").then( respuesta => respuesta.json());//Genera promesa y una vez se completa devuelve una respuesta en formato json 


const crearCliente = (nombre, email) =>{
  return fetch("http://localhost:3000/perfil",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre,email, id: uuid.v4()}),
  });
};

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
};

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then( respuesta => respuesta.json()) ; 
}

const actualizarCliente = (nombre, email, id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({nombre, email})
    })
    .then(respuesta => respuesta)
    .catch(err => console.log(err))
}

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
}








