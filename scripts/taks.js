// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.



/* ------ comienzan las funcionalidades una vez que carga< el documento ------ */
window.addEventListener('load', function () {

  /* ---------------- variables globales y llamado a funciones ---------------- */
  const btnCerrarSesion = document.querySelector('#closeApp')
  const urlUsuario = 'https://ctd-todo-api.herokuapp.com/v1/users/getMe';
  const nombreUsuario = document.querySelector('.user-info p')
  const urlTaks = 'https://ctd-todo-api.herokuapp.com/v1/tasks'
  const formCrearTarea= document.querySelector('.nueva-tarea')
  const elTareaPte = document.querySelector('.tareas-pendientes')


  obtenerNombreUsuario()
  consultarTareas()
  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

  btnCerrarSesion.addEventListener('click', function () {
    event.preventDefault();
    const cerrarSesion = confirm("¿Desea cerrar sesión?");
    if (cerrarSesion) {
      //limpiamos el localstorage y redireccioamos a login
      localStorage.clear();
      location.replace('./index.html');
    }
  });
  
  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() {
    const settings = {//creamos la constante setting y configuramos el metodo de la api a utilizar 
      method: 'GET',
       // en el body  definimos segun lo que nos indique la api toda su informacion la da en un formato jso que la pasamos a formato js con strinhfy y le pasamos el payload que es la variable creada anteriormente
      headers: {
          authorization : JSON.parse(localStorage.getItem('jwt')),
      }
  }
    console.log('obtenbiendo datos')
    fetch(urlUsuario , settings)
    .then(response => response.json())
    .then(data => {
      console.log("Nombre de usuario:");
      console.table(data.firstName);
   ;
      nombreUsuario.innerText = data.firstName;
    })
    .catch(error => console.log(error));

  }
  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */

  function consultarTareas() {
    const settings = {
      method : 'GET',
      headers : {
        authorization : JSON.parse(localStorage.jwt)
      }
    }
    console.log('Cargando tareas')
    fetch(urlTaks , settings)
    .then(response => response.json())
    .then (tareas => {
      console.log("Listado de tareas")
      console.table(tareas)
      renderizarTareas(tareas)
    })
  };


  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  formCrearTarea.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("creando tarea")
    console.log(nuevaTarea.value)

    const payload = {
      description :  nuevaTarea.value,
    }
    const settings = {
      method: 'POST',
      body: JSON.stringify(payload), // en el body  definimos segun lo que nos indique la api toda su informacion la da en un formato jso que la pasamos a formato js con strinhfy y le pasamos el payload que es la variable creada anteriormente
      headers: {
          'Content-Type': 'application/json',
          authorization : JSON.parse(localStorage.getItem('jwt'))
    }
  }



  });


  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(tareas) {
    const p = document.createElement("p");

    tareas.forEach(element => {
      p.textContent = element
      elTareaPte.appendChild(p)
    });
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