// Call the dataTables jQuery plugin
$(document).ready(function() {
    //alert("Pilas .....  Document ready al inicio");
    // On ready
});

async function registrarUsuarios(){

   // alert("Pilas ");

    let datos ={};
    datos.nombre = document.getElementById('txtNombre').value;
    datos.apellido = document.getElementById('txtApellido').value;
    datos.email    = document.getElementById('txtEmail').value;
    datos.telefono    = document.getElementById('txtTelefono').value;
    datos.password = document.getElementById('txtPassword').value;
    let repetirPassword = document.getElementById('txtRepeatPassword').value;

    if (repetirPassword != datos.password  ) {
        alert (" !!!  Password's No Coinciden Inténtelo de Nuevo !!!");
        return;
    }

    const request = await fetch('api/usuarios' , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)

    });
    alert('!! La cuenta fue creada con éxito !!');
    window.location.href = 'login.html'
  // La respuesta en una variable usuarios, es lo que me trae
  //   const usuarios  = await request.json();


}

