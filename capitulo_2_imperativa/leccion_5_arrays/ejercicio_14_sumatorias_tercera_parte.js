//https://mumuki.io/exercises/3282-programacion-imperativa-arrays-sumatorias-tercera-parte

function gananciaTotal4(unPeriodo) {
  let sumatoria = 0;
  for (let mes in unPeriodo) {
    sumatoria += unPeriodo[mes];
  }
  return sumatoria;
}
