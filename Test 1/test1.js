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

function MostrarObjeto(o,nameVar) {
    var salida = '';
    for (var p in o) {
    salida += p + ': ' + o[p] + '\n';
    }
    console.log(nameVar + '\n' + salida);
}
MostrarObjeto(colors,'var colors');
MostrarObjeto(rgb,'var rgb');
MostrarObjeto(wb,'var wb');