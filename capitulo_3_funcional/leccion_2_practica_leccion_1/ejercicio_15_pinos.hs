-- https://mumuki.io/exercises/4252-programacion-funcional-practica-valores-y-funciones-pinos

pesoPino altura = (maximum [altura - 3, 0]*200) + (minimum [altura, 3]*300)
esPesoUtil peso = (peso >= 400) && (peso <= 1000)
sirvePino = esPesoUtil.pesoPino
