// https://mumuki.io/exercises/2924-programacion-imperativa-practica-funciones-y-tipos-de-datos-quiero-retruco

function puntosDeEnvidoTotales(valor1, palo1, valor2, palo2) {
  return (palo1 == palo2)?
    sumarEnvido(valor1,valor2) :
    Math.max(valor1, valor2);
}

function sumarEnvido(valor1, valor2) {
  return valorEnvido(valor1) + valorEnvido(valor2) + 20;
}
