// https://mumuki.io/exercises/3374-programacion-imperativa-logica-booleana-puedo-subir

function puedeSubirse(alt, isAcompaniada, hasAfeccion) {
  return alcanzaAlturaMinima(alt,isAcompaniada) && !hasAfeccion;
}

function alcanzaAlturaMinima(altura, isAcompaniada) {
  return altura >= 1.5 || (isAcompaniada && altura >= 1.2);
}
