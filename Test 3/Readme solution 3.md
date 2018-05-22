
1.  En este caso, tenemos un código usando el objeto Promise (Promesa). Las promises (promesas) nos permiten manejar situaciones asíncronas en nuestras ejecuciones, pero tenemos un pequeño problema… No es una solución totalmente cross-browser. Sabemos que no funciona en Internet Explorer así que nos gustaría saber cómo modificarías nuestro código (test.js) para que funcione correctamente.


    En este caso, al igual que en el anterior, el objeto Promise no está soportado nativamente en IE. La solución que propongo es añadir un polyfill y modificar un poco el código, de la siguiente manera:

    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.3.4/bluebird.min.js"></script>

        'use strict';
        var promise = new Promise(function(resolve, reject) {
            setTimeout(function () {
                if (Math.round(Math.random()) === 1) {
                    resolve("Success!");
                } else {
                    reject("Fail!");
                }
            }, 1000);
        });

        promise
            .then(function(successMessage) {
                console.log("Yes! " + successMessage);
            })
            .catch(function(failMessage) {
                console.log("No! " + failMessage);
            });
