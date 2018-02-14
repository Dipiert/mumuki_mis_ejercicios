// https://mumuki.io/exercises/3364-programacion-imperativa-logica-booleana-negar-no-cuesta-nada

function esMayorDeEdad(edad) {
  return edad >= 18;
}

function esMenorDeEdad(edad) {
  return !(esMayorDeEdad(edad));
}
