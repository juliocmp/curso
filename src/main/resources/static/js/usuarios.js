// Call the dataTables jQuery plugin
$(document).ready(function() {
    // alert("Pilas .....");
    cargarUsuarios();

  $('#usuarios').DataTable();
  actualizarEmailDelUsuario();
});

function actualizarEmailDelUsuario(){

    document.getElementById('txt-email-usuario').outerHTML = localStorage.email;


}


async function cargarUsuarios(){

  const request = await fetch('api/usuarios', {
    method: 'GET',
    headers: leerHeader()

  });
  // La respuesta en una variable usuarios, es lo que me trae
  const usuarios  = await request.json();


  //console.log(usuarios);
  let listadoHtml = '';
  for ( let usuario of usuarios) {

    let botonEliminar ='<a href="#" onclick = "eliminarUsuario(' + usuario.id + ')" class="btn btn-danger btn-circle btn-sm"> <i class="fas fa-trash"></i></a>';

    let usuarioHtml  = '<tr><td>' + usuario.id + '</td> <td>' + usuario.nombre + ' ' + usuario.apellido +'</td> <td>' + usuario.email +'</td> <td>' + usuario.telefono +'</td> <td>' + usuario.password +'</td> <td>' + botonEliminar +'</td> </tr>';
    listadoHtml += usuarioHtml;
  }

  document.querySelector('#usuarios tbody').outerHTML = listadoHtml;

}

function leerHeader(){
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
        };
}


async function eliminarUsuario(id){

    //alert(id);
    if(!confirm("Desea eliminar este registro?")){
        return
    }

    const request = await fetch('api/usuarios/' + id, {
    method: 'DELETE',
    headers: leerHeader()


  });
  //const usuarios  = await request.json();   No requiere porque no deuelve  informacion solo borra el registro

  location.reload();     ///  Una vez click en borrar refrescar tabla

}