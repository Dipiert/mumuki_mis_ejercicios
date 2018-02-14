// https://mumuki.io/exercises/2740-programacion-imperativa-arrays-mas-premios
function medallaSegunPuesto(puesto) {
  return ["oro", "plata", "bronce"][puesto - 1] 
  || "nada";
}
