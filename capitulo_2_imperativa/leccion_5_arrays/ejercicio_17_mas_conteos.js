// https://mumuki.io/exercises/2745-programacion-imperativa-arrays-mas-conteos

function cantidadDeMesesConPerdida(unPeriodo) {
  let mesesConPerdida = 0;
  for (let mes of unPeriodo) {
    if (mes < 0) mesesConPerdida++;
  }
  return mesesConPerdida;
}
