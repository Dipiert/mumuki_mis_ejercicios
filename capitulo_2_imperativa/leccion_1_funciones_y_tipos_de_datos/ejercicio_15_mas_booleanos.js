//https://mumuki.io/exercises/2771-programacion-imperativa-funciones-y-tipos-de-datos-y-que-tal-si

function esNumeroDeLaSuerte(num) {
  return esPositivo(num) && 
         esMultiploDe2o3(num) &&
         !es15(num);
}

function esPositivo(num) {
  return num > 0;
}

function esMultiploDe2o3(num) {
  return esMultiploDe(num, 2) || esMultiploDe(num, 3);
}

function esMultiploDe(num, factor) {
  return num % factor == 0;
}

function es15(num) {
  return num == 15;
}
