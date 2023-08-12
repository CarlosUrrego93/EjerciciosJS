// Condiciones
/**
 * Operadores de comparación
 * (==) comparamos valores sin importar el tipo de dato
 * (===) comparamos valores respetando el tipo de dato
 * (>) Mayor que
 * (<) Menor que
 * (>=) Mayor o igual
 * (<=) Menor o igual
 * (!=) Diferente no respeta tipos de datos
 * (!==) Diferente respetando tipo de datos
 */

/**
 * Operadores logicos
 * (||) para decir - O cualquiera de las condiciones son validas
 * (&&) para decir - Y si o si se deben cumplir todas las condiciones
 */

// Declaramos la variable edad
const age = prompt("Ingresa tu edad");
const country = prompt("Ingresa tu pais").toLowerCase();

// Condicional if/else
if (age >= "16" && country !== "alemania") {
  alert("Se habilito el catalogo de peliculas violentas");
} else {
  alert("No tienes permiso de ver este catalogo");
}

//
/**
 * NOTA:
 * Mayusculas (x) "(.toLowerCase) para dejar todos los datos en minúscula"
 * Tildes (x) "se escriben de forma manual dentro de los algoritmos"
 * Vacios (x)
 * Nulos ()
 * Convertir tipo de datos ()
 */
