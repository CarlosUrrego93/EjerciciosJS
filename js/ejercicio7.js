//Ejercicio de Lógica
let day = prompt("Ingrese día");

if (day === null || day === "") {
  alert("Opción inválida");
} else {
  day = day.toLowerCase();
  if (
    day === "lunes" ||
    day === "martes" ||
    day === "miercoles" ||
    day === "miércoles" ||
    day === "jueves" ||
    day === "viernes"
  ) {
    alert("Es un dia entre semana");
  } else {
    // IF ANIDADOS
    if (day === "sabado" || day === "sábado" || day === "domingo") {
      alert("Es un fin de semana");
    } else {
      alert("Favor agregar solo dias de la semana");
    }
  }
}

/**
 * NOTAS:
 * 1- Mayusculas
 * 2- Palabras que no son días
 * 3- Vacio
 * 4- No le de ninguna opción
 * 5- Tíldes
 *
 * Diagramos de flujo
 */
