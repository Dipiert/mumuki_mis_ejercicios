//https://mumuki.io/exercises/2921-programacion-imperativa-practica-funciones-y-tipos-de-datos-cartelitos-optimos

function escribirCartelito(titulo, nombre, apellido, corto) {
  if (corto) return titulo + " " + apellido;
  return titulo + " " + nombre + " " + apellido;
}

function escribirCartelitoOptimo(titulo, nombre, apellido, corto) {
  if (corto || esNombreDemasiadoLargo(nombre, apellido)) 
    return titulo + " " + apellido;
  return titulo + " " + nombre + " " + apellido;
}

function esNombreDemasiadoLargo(nombre, apellido) {
  return (nombre.length + apellido.length) > 15;
}
