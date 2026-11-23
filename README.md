# Sapien · revisión aislada V39

Solo staging de prueba. Producción no se tocó.

- Tarjeta web: $50.000 COP y “Pago único” a la izquierda; botón “Ver qué incluye” más grande a la derecha. “Pago contra entrega” queda exclusivamente dentro del modal.
- Más aire uniforme entre títulos de categoría y sliders en móvil/escritorio.
- Wordmark: la S original no se modificó; “apien” se acercó 4 unidades en el SVG.
- Se recomienda “Asistente” como etiqueta visible para el público no técnico (más claro que “Agente”); el nombre Sapien permanece en la marca.
- El espacio de conversación es mayor en escritorio y móvil. Al abrirse el teclado, un modo responsive usa visualViewport, fija el campo sobre el teclado y oculta el dock inferior.
- Notas de respuesta siguen siendo locales/de demostración: no usan una IA real, no revisan estado activo, no guardan ni ejecutan acciones.
- Los nombres de producto y precios fuera de esta tarjeta, contenido de otros sliders, identidades y diseño de marca se conservan.

Emulación de pantalla no sustituye pruebas con teclado virtual en un teléfono físico.

V39: la acción de detalles queda en la misma fila, a la derecha del precio, incluso en 320 px. La vista del asistente elimina el título repetido para ganar área de conversación.

V39 structurally separates the web offer footer from the legacy card footer so the price and action stay side-by-side; removed generated duplicate arrows. Visual confirmation on deployed build pending.

V40: precio y botón ocupan columnas explícitas con ancho mínimo en móvil, evitando superposición con los estilos anteriores.

V41 removes legacy button-class collisions and generated duplicate arrows; the price and action use an explicit two-column grid.
