//https://mumuki.io/exercises/2759-programacion-imperativa-funciones-y-tipos-de-datos-funciones-uso

function anterior(numero) {
    return numero -1;
}

function triple(numero) {
  return numero*3;
}

function anteriorDelTriple(numero) {
  return anterior(triple(numero));
}
