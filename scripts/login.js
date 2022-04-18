window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const elementEmail = document.querySelector('#inputEmail');
    const elemenyPass = document.querySelector('#inputPassword');
    const url = 'https://ctd-todo-api.herokuapp.com/v1';
    const btn= document.querySelector('button[type="submit"]')
    const form = document.querySelector('form')
    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
       event.preventDefault();
       const email = elementEmail.value 
       const password = elemenyPass.value 
        const payload = {
            email,
            password, 
        }

        const settings = {
           method: 'POST',
           body:JSON.stringify(payload),
           headers : {
               'content-Type':'application/json'
           }

        }
        realizarLogin(settings);
        form.reset()

    });


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(settings) {
       fetch (`${url}/users/login`,settings)
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


        })



        
    };


});