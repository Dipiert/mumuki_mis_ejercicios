-- https://mumuki.io/exercises/4254-programacion-funcional-practica-valores-y-funciones-pasan-los-dias

diasParejos a b c = (dispersion a b c) < 30
diasLocos a b c = (dispersion a b c) > 100
diasNormales a b c = not (diasParejos a b c) && not (diasLocos a b c)
