# Sapien · espacio aislado de revisión V13

Vista pública de prueba, separada de `panel.redsapien.co`. Parte del HTML y la hoja CSS públicos del panel; no carga scripts de producción, Supabase, cuentas ni datos reales. No tiene acceso de escritura a producción.

- El wordmark «Sapien» se mantiene centrado en el mismo espacio de la barra y se reduce aproximadamente 30% también en móvil; el fondo es translúcido y muy sutil.
- Los nueve pictogramas V6 reemplazan los originales, sin aro: mantienen la caja de 32 × 32 px y el dibujo de 22 × 22 px de producción. Los controles de menú, cierre, volver y carrusel reciben el halo rojo sin cambiar sus dimensiones ni posición.
- No cambia el texto ni los precios de ninguna tarjeta. La franja de prueba y el sello «Orgullosamente de Colombia» no ocupan espacio en el panel.
- El saludo rota por nueve frases cortas; usa el campo existente de nombre de marca. La edición es solo de esta pestaña (sessionStorage), no se envía ni guarda en una cuenta. Los botones de guardar, solicitar, autenticación y carga no funcionan en esta demo.
- Los iconos de instalación y manifiestos separados para móvil/escritorio pertenecen a esta ruta de pruebas. Se revisó la vista en navegador a 320, 360 y 390 px, y se verificaron sus 37 recursos; la instalación y los gestos táctiles en un dispositivo físico todavía no están comprobados.

La prueba abre de forma pública para cualquiera que tenga la dirección; no es una cuenta ni una copia operativa. La vista puede revisarse en escritorio, móvil emulado y en `/qa-mobile-v10.html`. No se modificó ni publicó Sapien en producción.

- En V13, cada pictograma tiene un aro fino del color propio; se ilumina suavemente al pasar el cursor o recibir foco, sin cambiar la caja 32 × 32 ni el glifo 22 × 22. Flechas, volver, X, menú y colapsar comparten halo rojo con transición; la animación respeta movimiento reducido.
- Se añadió una trama fija de red/neuronas muy tenue en el fondo. No ocupa espacio, no recibe clics y no anima constantemente.
- Se redujo solo el margen entre bienvenida, frase y primera sección para acercar la fila de tarjetas y su siguiente encabezado al primer pliegue.
