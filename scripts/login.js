    window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
     const form = document.forms[0]
     const email = document.querySelector('#inputEmail')
     const password = document.querySelector('#inputPassword')
     const url = 'https://ctd-todo-api.herokuapp.com/v1'
     //* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        event.preventDefault();
       const payload = {   //aqui vamos a  describir los datos en la forma como la API lo requiere (payload)
        email: email.value,
        password: password.value
    };

    const settings = {//creamos la constante setting y configuramos el metodo de la api a utilizar 
        method: 'POST',
        body: JSON.stringify(payload), // en el body  definimos segun lo que nos indique la api toda su informacion la da en un formato jso que la pasamos a formato js con strinhfy y le pasamos el payload que es la variable creada anteriormente
        headers: {
            'Content-Type': 'application/json'// 
        }
    };
        
       
        realizarLogin(settings);
        //limpio los datos del formulario 
      

    });
    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(settings) {
       fetch (`${url}/users/login`, settings)
        .then(response => {
            console.log (response);
            const {status} = response
            if (status === 201  ){
                return response.json();
            }
        })
        .then(data => {
            console.log("Promesa cumplida:");
            console.log(data);
            
            if (data.jwt) {
                 //guardo en LocalStorage el objeto con el token
                localStorage.setItem('jwt', JSON.stringify(data.jwt));
                 //redireccionamos a la página
                location.replace('mis-tareas.html')
            }


        }).catch(err => {
            console.log("Promesa rechazada:");
            console.log(err);



        
    });
    }

});