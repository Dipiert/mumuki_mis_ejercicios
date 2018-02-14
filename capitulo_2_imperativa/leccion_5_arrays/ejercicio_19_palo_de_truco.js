// https://mumuki.io/exercises/2747-programacion-imperativa-arrays-palo-de-truco

function paloDeTruco(palo) {
  let cartas = [];
  let str;
  for (let i = 1; i <= 12; i++) {
    if (i != 8 && i != 9) {
      str = i + " de " + palo;
      cartas.push(str);  
    }    
  }
  return cartas;
}
