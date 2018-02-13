// https://mumuki.io/exercises/2755-programacion-imperativa-variables-y-procedimientos-variable-globales

function ascensorSobrecargado(cantPersonas) {
  let cargaMaxima = 300;
  return (cantPersonas * pesoPromedioPersonaEnKilogramos > cargaMaxima);
}
