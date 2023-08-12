let name = prompt("Ingresa tu nombre");
let age = prompt("Ingresa tu edad");
let country = prompt("Ingresa tu pais").toLowerCase();
let habilidad = prompt("Ingresa tu habilidad (zurdo o diestra) ").toLowerCase();

if (country === "ecuador" && age >= "18" && habilidad === "zurdo") {
  alert("Quedas registrado al cupo de la beca");
}
if (country === "colombia" && age >= "18" && habilidad === "zurdo") {
  alert("Quedas registrado al cupo de la beca");
} else {
  alert("No cumples los requisitos");
}
