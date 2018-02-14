// https://mumuki.io/exercises/2746-programacion-imperativa-arrays-filtrados

function saldosDeMesesConGanancia(unPeriodo) {
  let saldos = [];
  for (let gananciaMes of unPeriodo) {
    if (gananciaMes > 0) saldos.push(gananciaMes);
  }
  return saldos;
}
