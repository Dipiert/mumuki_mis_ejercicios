// https://mumuki.io/exercises/3369-programacion-imperativa-logica-booleana-buen-dia

function sonMediosHermanos(a, b) {
  return (mismoPadreDistintaMadre(a,b) ||
         mismaMadreDistintoPadre(a,b));
}

function mismoPadreDistintaMadre(a, b) {
  return (padreDe(a) === padreDe(b) &&
          madreDe(a) !== madreDe(b)
         );
}

function mismaMadreDistintoPadre(a, b) {
  return (madreDe(a) === madreDe(b) &&
          padreDe(a) !== padreDe(b)
         );
}
