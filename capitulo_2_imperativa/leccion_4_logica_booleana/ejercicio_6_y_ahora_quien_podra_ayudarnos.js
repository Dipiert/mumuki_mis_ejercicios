//https://mumuki.io/exercises/3368-programacion-imperativa-logica-booleana-y-ahora-quien-podra-ayudarnos#editor

function estaCerrado(esFeriado, dia, horario) {
  return !dentroDeHorarioBancario(horario) ||                              
         esFinDeSemana(dia) ||
         esFeriado;
}

function esFinDeSemana(dia) {
  return (dia === "sabado" || dia === "domingo");
}

function esDiaDeSemana(dia) {
  return !esFinDeSemana(dia);
}
