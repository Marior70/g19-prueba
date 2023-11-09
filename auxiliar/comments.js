/* 
document.getElementById("enviarMensaje").addEventListener("click", function () {
   var nombre = document.getElementById("name").value;
   var correo = document.getElementById("correo").value;
   var mensaje = document.getElementById("mensaje").value;

   var formData = new FormData();
   formData.append("Nombre", nombre);
   formData.append("Mail", correo);
   formData.append("Comentario", mensaje);

   var url = "https://sheetdb.io/api/v1/p6vytybspledu"; // Reemplaza con la URL correcta de SheetDB

   var xhr = new XMLHttpRequest();
   xhr.open("POST", url, true);

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
 */