# Reto #3: 🏗️ Organizando el inventario

Santa Claus 🎅 está revisando el inventario de su taller para preparar la entrega de regalos. Los elfos han registrado los juguetes en un array de objetos, pero la información está un poco desordenada. Necesitas ayudar a Santa a organizar el inventario.

Recibirás un array de objetos, donde cada objeto representa un juguete y tiene las propiedades:

- name: el nombre del juguete (string).
- quantity: la cantidad disponible de ese juguete (entero).
- category: la categoría a la que pertenece el juguete (string).

Escribe una función que procese este array y devuelva un objeto que organice los juguetes de la siguiente manera:

- Las claves del objeto serán las categorías de juguetes.
- Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades totales de cada juguete en esa categoría.
- Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.
- Si el array está vacío, la función debe devolver un objeto vacío {}.

