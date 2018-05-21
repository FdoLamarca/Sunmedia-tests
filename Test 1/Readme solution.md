
1.  En el fragmento de código de nuestro archivo (test.js) podemos encontrar hasta 3 variables. ¿Podrías decirnos cuál sería el valor de todas ellas al finalizar la ejecución del script?

    La sintaxis del método Object.assign() es la siguiente:
    Object.assign(target,sources..). Este método copia sólo las propiedades enumerables y propias del objeto origen(source) a un objeto destin(target).  
    Por tanto, el valor de las variables una vez ejecutado el string sería:
        
        rgb = {
            red: #FF0000,
            green: #00FF00,
            blue: #0000FF,
            white: #FFFFFF,
            black: #000000
        }

        wb = {
            white: "#FFFFFF",
            black: "#000000"
        }

        colors = {
            red: #FF0000,
            green: #00FF00,
            blue: #0000FF,
            white: #FFFFFF,
            black: #000000
        }

2. Modifica el código para que las variables rgb y wb mantengan sus valores iniciales y colors tenga los valores de ambas al finalizar la ejecución del script.

        var rgb = {
            red: "#FF0000",
            green: "#00FF00",
            blue: "#0000FF"
        };

        var wb = {
            white: "#FFFFFF",
            black: "#000000"
        };

        var colors = Object.assign({},rgb, wb);

3.  Además, tenemos un bug localizado en dispositivos con Internet Explorer… El código de nuestro script no funciona y necesitamos que se ejecute también en este navegador. ¿Sabrías identificar cuál es el problema? ¿Qué solución nos propones?

    El problema es que el método Object.assign(), no está disponible en el estandar de Internet explorer desde su versión 6 (no esta soportado).
    Podría solucionarse con el uso de un polyfill que diera soporte a ese método.

    Este polyfill está verificado:

        if (typeof Object.assign != 'function') {
            Object.assign = function (target, varArgs) { // .length of function is 2
            'use strict';
            if (target == null) { // TypeError if undefined or null
                throw new TypeError('Cannot convert undefined or null to object');
            }

            var to = Object(target);

            for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];

                if (nextSource != null) { // pasamos si es undefined o null
                    for (var nextKey in nextSource) {
                        // Evita un error cuando 'hasOwnProperty' ha sido sobrescrito
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
            return to;
            };
        }
