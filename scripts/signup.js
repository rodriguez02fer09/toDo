window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    //guardamos nuestros elementos a utilizar en una variable  para realizar el registro   
    const form = document.forms[0];
    const nombre = document.querySelector('#inputNombre');
    const apellido = document.querySelector('#inputApellido');
    const email = document.querySelector('#inputEmail');
    const password = document.querySelector('#inputPassword');
    const url = 'https://ctd-todo-api.herokuapp.com/v1';
    // se utilizan los elementos a usar dependiendo lo que nos pidan en este caso es un registro

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    //aqui realizamos la funcion que va a escuchar el evento para enviar los datos 
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const payload = {   //aqui vamos a  describir los datos en la forma como la API lo requiere
            firstName: nombre.value, // lo definimos como propiedad : valor
            lastName: apellido.value, 
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
        realizarRegister(settings);// aqui llamamos la funcion que se va a crear mas adelante implementando el fetch
        form.reset();



    });

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarRegister(settings) {// aqiu empezamos a implenetar nuestra funcion fetch 
        fetch(`${url}/users`,settings)//le pasamos la url como parametro con el enpoint a utilizar(get/me)
            .then(response => {
                console.log(response);//aqui nos traemos la informaciòn de la api
                if (response.ok != true) {
                    alert("Alguno de los datos es incorrecto.")
                }
                return response.json();//como nuestra respuesta la trae en formato jso se parcea para que sea manipulable en el siguiente then
            })
            
            .then(data => {//aqui  ya traemos los datos (data) que ya necesitamos 
                console.log("Promesa cumplida:");
                console.log(data);
               
                if (data.jwt) {//si nuestra operacion es exitosa se trae un token que retorna un jwt
                    
                    //guardo en LocalStorage el objeto con el token
                    //localstorage.setItem guarda los datos mientras la sesion este bierta 
                    localStorage.setItem('jwt', JSON.stringify(data.jwt));//recibe dos parametros jwt y el json .strinfy(como parametro recibe )
                    //localStorage guarda la informaciòn por tiempo indefinidio sin importa que se cierre el navegador 
                 //como parametros recibe  una clave y un valor 
                    location.replace('/mis-tareas.html');//aqui el parametro que le pasamos es el enpoint a el que nos redirige
                }
            }).catch(err => {
                console.log("Promesa rechazada:");
                console.log(err);
            })
            }
                
                
            

    });

