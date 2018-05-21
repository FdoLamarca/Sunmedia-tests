
El fragmento de código de nuestro fichero test.js nos devuelve un output no deseado. Queremos imprimir un valor incremental a cada segundo pero lo que nos devuelve el código es el mismo valor en cada iteración.

1.  Sin necesidad de ejecutar el código, ¿sabrías decirnos qué valor imprimiría por consola el script? ¿Cuál es el motivo?

    El valor que imprime el código es 5. El motivo es que el bucle for se recorre en mucho menos tiempo de 1 segundo, que es el tiempo que tiene asignada la función setTimeout para mostrar el dato por la consola. Cuando el primer console.log imprime el valor de i, el bucle for ya ha terminado de recorrerse las cinco veces, por eso el valor mostrado de i es 5, en todas las llamadas a console.log.

2.  Sabiendo que el output que buscamos es el que encuentras bajo estas líneas… ¿Cómo solucionarías el fragmento de código para que el output sea el deseado?
    - 0
    - 1
    - 2
    - 3
    - 4



		var i=0;
		var t;
		timedCount();
		function timedCount() {
			console.log(i);
			i++; 
			t = setTimeout(function(){ timedCount() }, 1000); 
			if (i == 5) { 
				clearTimeout(t);
			} 
		};
	
