// https://mumuki.io/exercises/3373-programacion-imperativa-logica-booleana-un-ejercicio-sin-precedentes

let minMujer = 60;
let minHombre = 65;
let minAporte = 30;

function puedeJubilarse(edad, sexo, aporte) {
  return cumpleEdadMinima(edad, sexo) && tieneSuficientesAportes(aporte) ;
}

function cumpleEdadMinima(edad, sexo) {
  return sexo === 'F' && edad > minMujer || sexo === 'M' && edad > minHombre;
}

function tieneSuficientesAportes(aporte) {
  return aporte > minAporte;
}
