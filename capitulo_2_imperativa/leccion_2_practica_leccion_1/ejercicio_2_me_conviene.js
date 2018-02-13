// https://mumuki.io/exercises/2847-programacion-imperativa-practica-funciones-y-tipos-de-datos-me-conviene

function meConviene(pulgadas, cantidadRAM) {
  return cuantoCuesta(pulgadas, cantidadRAM) < 6000
         && pulgadas >= 32
         && cantidadRAM >= 8;        
}
