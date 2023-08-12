/**
 * 1 -
 * Ingresar un departamento (Cundinamarca, quindio, antioquia, valle)
 * alert("opcion no valida")
 * Dependiendo de que departamento es debe mostrar cual es la capital
 */

/**
 * 2 -
 */

let departamento = prompt("Ingrese un departamento");
if (departamento === null || departamento === "") {
  alert("Opción inválida");
} else {
  departamento = departamento.toLowerCase();
  if (departamento === "cundinamarca") {
    alert("bogotá");
  } else {
    if (departamento === "quindio") {
      alert("armenia");
    } else {
      if (departamento === "antioquia") {
        alert("medellin");
      } else {
        if (departamento === "valle") {
          alert("cali");
        } else {
          alert("departamento inválido");
        }
      }
    }
  }
}
