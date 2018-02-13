//https://mumuki.io/exercises/2919-programacion-imperativa-practica-funciones-y-tipos-de-datos-mas-cartelitos

function escribirCartelito(titulo, nombre, apellido, corto) {
  if (corto) {
    return titulo + " " + apellido;
  }
  return titulo + " " + nombre + " " + apellido;
}

