//https://mumuki.io/exercises/2744-programacion-imperativa-arrays-conteos

function cantidadDeMesesConGanancia(unPeriodo) {
  let cantidad = 0;
  for (let mes of unPeriodo) {
    if (mes > 0) cantidad++;
  }
  return cantidad;
}
