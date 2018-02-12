// https://mumuki.io/exercises/2764-programacion-imperativa-funciones-y-tipos-de-datos-calefones

function cuantoCarga(cantidadActual, quieroCargar) {
  var capacidad = 25;
  return Math.min(quieroCargar, capacidad - cantidadActual);
}
