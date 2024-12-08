# Reto #8: 🦌 La carrera de renos

¡Es hora de seleccionar a los renos más rápidos para los viajes de Santa! 🦌🎄
Santa Claus ha organizado unas emocionantes carreras de renos para decidir cuáles están en mejor forma.

Tu tarea es mostrar el progreso de cada reno en una pista de nieve en formato isométrico.

La información que recibes:

- indices: Un array de enteros que representan el progreso de cada reno en la pista:
- 0: El carril está vacío.
- Número positivo: La posición actual del reno desde el inicio de la pista.
- Número negativo: La posición actual del reno desde el final de la pista.
- length: La longitud de cada carril.

Devuelve un string que represente la pista de la carrera:

- Cada carril tiene exactamente length posiciones llenas de nieve (~).
- Cada reno se representa con la letra r.
- Los carriles están numerados al final con /1, /2, etc.
- La vista es isométrica, por lo que los carriles inferiores están desplazados hacia la derecha.

