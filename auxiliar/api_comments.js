const API_URL = 'https://sheetdb.io/api/v1';
const API_URN = 'p6vytybspledu';
const API_URI = API_URL + API_URN;

/* GET comments */
const HTMLResponse = document.querySelector("#commentsList")

fetch(`${API_URI}`)
    .then(response => response.json())
    .then(users => {
        const tpl = users.map(user => `<li>${user.Nombre}: ${user.Comentario}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    });


/* POST comments */
document.getElementById("enviarMensaje").addEventListener("click", function () {
    var nombre = document.getElementById("name").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;

    var formData = new FormData();
    formData.append("Nombre", nombre);
    formData.append("Mail", correo);
    formData.append("Comentario", mensaje);

    // var url = "https://sheetdb.io/api/v1/p6vytybspledu"; // Reemplaza con la URL correcta de SheetDB

    var xhr = new XMLHttpRequest();
    xhr.open("POST", API_URI, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 201) {
                document.getElementById("name").value = '';
                document.getElementById("correo").value = '';
                document.getElementById("mensaje").value = '';
                alert("Mensaje enviado");
                window.location.href = './index.html';
            } else {
                console.error("Error al enviar datos: " + xhr.status);
            }
        }
    };

    xhr.send(formData);
});