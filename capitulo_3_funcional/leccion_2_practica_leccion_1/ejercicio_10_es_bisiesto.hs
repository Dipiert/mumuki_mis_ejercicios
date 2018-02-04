-- https://mumuki.io/exercises/4246-programacion-funcional-practica-valores-y-funciones-esbisiesto

esBisiesto anio = (esMultiploDe anio 400) || (esMultiploDe anio 4 && not (esMultiploDe anio 100))
