// Call the dataTables jQuery plugin
$(document).ready(function() {
    //alert("Pilas .....  Document ready al inicio");
    // On ready
});

async function iniciarSesion(){

   // alert("Pilas ");

    let datos ={};

    datos.email    = document.getElementById('txtEmail').value;
    datos.password = document.getElementById('txtPassword').value;


    const request = await fetch('api/login' , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)

    });
  // La respuesta en una variable usuarios, es lo que me trae
    //const respuesta  = await request.json();
    const respuesta  = await request.text();
    if (respuesta  != 'Falló') {
        localStorage.token = respuesta;
        localStorage.email = datos.email;
        window.location.href = 'usuarios.html'
    } else {
        alert ("Las credenciales son incorrectas. Por favor intente nuevamente ...")
    }



}