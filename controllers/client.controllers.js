import { clientServices } from "../services/client-service.js";

const crearNuevaLinea = (nombre, email, id) => {
    const linea = document.createElement("tr") ; 
    const contenido = `
            <td class="td" data-td>
            ${nombre}
            </td>
            <td>${email}</td>
            <td>
              <ul class="table__button-control">
                <li>
                  <a
                    href="../screens/editar_cliente.html?id=${id}"
                    class="simple-button simple-button--edit">Editar</a>
                </li>
                <li>
                  <button
                    class="simple-button simple-button--delete"
                    type="button" id = "${id}">
                    Eliminar
                  </button>
                </li>
              </ul>
            </td>
          </tr>`
    linea.innerHTML = contenido ; //Agregar codigo al HTML
    const btn = linea.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        clientServices.eliminarCliente(id).then((respuesta) => {
            console.log(respuesta);
        }).catch((err) => alert("Ocurrió un error"));
    });
    return linea ; 
}

const table = document.querySelector("[data-table]"); //data donde se agregaran las lineas

clientServices.listaClientes().then((data) =>{
    data.forEach( ({nombre, email,id}) => {   //Destructurar el objeto perfil
      const nuevaLinea = crearNuevaLinea(nombre, email, id); 
      table.appendChild(nuevaLinea) ; 
    });
}).catch((error) => alert("Ocurrió un error"))


