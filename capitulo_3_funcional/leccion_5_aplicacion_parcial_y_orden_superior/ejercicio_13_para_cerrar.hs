-- https://mumuki.io/exercises/1611-programacion-funcional-aplicacion-parcial-y-orden-superior-para-cerrar

dobleSegun f a = 2*f a
sumaDeDoblesSegun a b f = (+) (dobleSegun f a) (dobleSegun f b)
