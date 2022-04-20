// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.



/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function () {

  /* ---------------- variables globales y llamado a funciones ---------------- */
  const urlUsuario = 'https://ctd-todo-api.herokuapp.com/v1/users/getMe';
  const btnCerrarSesion = document.querySelector('#closeApp')
  const url = 'https://ctd-todo-api.herokuapp.com/v1';
  const form = document.querySelector('form')
  const nombre = document.querySelector('#inputNombre');
  const apellido = document.querySelector('#inputApellido');
  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

  btnCerrarSesion.addEventListener('click', function () {
   
    const cerrarSesion = confirm ("Desea cerrar la sesion")
    if (cerrarSesion){

      localStorage.clear()// limpiamos los datos de la sesion 
      location.replace('index.html')   //si confirmamos el cierre de sesion redireccionamos la pagina   

    }

  });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() {
      const settings = {
      method: 'GET',
      headers: {
        authorization: localStorage.getItem('jwt')
      }
      }

      console.log("consultando usuario")
      fetch('urlUsuario', settings)
      .then(response => response.json()
      .then(data =>)


   )

  };


  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */

  function consultarTareas() {
    
    



  };


  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  formCrearTarea.addEventListener('submit', function (event) {
    




  });


  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {







  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {
    
    



  }


  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {
   
    

    

  };

});