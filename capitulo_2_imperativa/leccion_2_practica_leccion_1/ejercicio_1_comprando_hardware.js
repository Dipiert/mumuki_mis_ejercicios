//https://mumuki.io/exercises/2771-programacion-imperativa-funciones-y-tipos-de-datos-y-que-tal-si

function cuantoCuesta(pulgadas, cantidadRAM) {
  return calcularPrecioMonitor(pulgadas) + 
         calcularPrecioRAM(cantidadRAM) +
         getPrecioBase();
}

function getPrecioBase() {
 return 1000; 
}

function calcularPrecioMonitor(pulgadas) {
  return 60 * pulgadas;
}

function calcularPrecioRAM(cantidadRAM) {
  return 200 * cantidadRAM;
}
