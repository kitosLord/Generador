function BienRandom () {

    let Nombres = [ 'eduardo', 'yussif', 'rogelio', 'heyder'];

    let Apellidos = [ 'Flores', ' Graniel', 'Ix'];

    // aqui no es necesario obtener el id porque ya estamos asignando la funcion al boton 
    var primer =  Math.floor (Math.random() * Nombres.length );
    // .length sirve para obtener el tamaño de el array
    var segundo = Math.floor (Math.random() * Apellidos.length);

    document.getElementById ("ejemplo").innerHTML = "  <h2> Nombre :   </h2> " +  Nombres[primer] + " " + Apellidos[segundo];

}
