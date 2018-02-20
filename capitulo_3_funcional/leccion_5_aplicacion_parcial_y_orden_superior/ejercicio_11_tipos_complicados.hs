-- https://mumuki.io/exercises/1608-programacion-funcional-aplicacion-parcial-y-orden-superior-tipos-complicados#editor

funcionMisteriosa1 :: Num t => (t -> Bool -> a) -> a
funcionMisteriosa2 :: Foldable t => (Int -> c) -> t a -> c
funcionMisteriosa3 :: (t2 -> a -> t1) -> (t -> t2) -> t -> t1
