# Reto #20: 🎁 Encuentra los regalos faltantes y duplicados

Santa Claus 🎅 está revisando la lista de regalos que debe entregar esta Navidad. Sin embargo, algunos regalos faltan, otros están duplicados, y algunos tienen cantidades incorrectas. Necesita tu ayuda para resolver el problema.

Recibirás dos arrays:

- received: Lista con los regalos que Santa tiene actualmente.
- expected: Lista con los regalos que Santa debería tener.

Tu tarea es escribir una función que, dado received y expected, devuelva un objeto con dos propiedades:

- missing: Un objeto donde las claves son los nombres de los regalos faltantes y los valores son las cantidades que faltan.
- extra: Un objeto donde las claves son los nombres de los regalos extra o duplicados y los valores son las cantidades que sobran.

Ten en cuenta que:

- Los regalos pueden repetirse en ambas listas.
- Las listas de regalos están desordenadas.
- Si no hay regalos que falten o sobren, las propiedades correspondientes (missing o extra) deben ser objetos vacíos.

