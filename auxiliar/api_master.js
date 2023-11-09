function enviarMensaje() {
    var nombre = document.getElementById("name").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;
  
    // Aquí puedes utilizar una biblioteca o realizar una llamada AJAX para enviar los datos a la API
    // Ejemplo utilizando la función fetch():
    fetch('//https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      body: JSON.stringify({ nombre: nombre, correo: correo, mensaje: mensaje }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      // Aquí puedes manejar la respuesta de la API
      console.log(data);
    })
    .catch(error => {
      // Aquí puedes manejar errores de conexión o cualquier otro error
      console.error(error);
    });
  }

/* 
  export function veronicaSuperPower(data) {
    let item;
    let items = "";
  
    if (!data) {
      console.log("no hay data papu");
      return;
    }
  
    data.forEach((cervecita) => {
      let pattern = `
          <div>
              <img src="${cervecita.image}" alt="${cervecita.name}">
              <div>
              <h2>precio : ${cervecita.price}</h2>
              <p>${cervecita.name}</p>
              </div>
          </div>
          `;
      items += pattern;
    });
  
    return items;
  }




  const { log } = console;

export class Render {
  constructor(containerID) {
    this.container = document.getElementById(containerID);
  }

  fetchData(URI, cb, options = {}) {
    fetch(URI, options)
      .then((res) => res.json())
      .then((data) => {
        if (!cb) {
          log(data);
          return null;
        }

        let itemsRenderizar = cb(data);
        this.#renderInContainer(itemsRenderizar);
        return;
      })
      .catch((error) => log({ error }));
  }
  #renderInContainer(items) {
    this.container.innerHTML = items;
  }
}
 */