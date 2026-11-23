# Sapien · revisión aislada V47

**Staging únicamente. El panel productivo no se modificó.**

- Lema: “Creamos todo y lo dejamos en automático.” Sin promesa de resultados de ventas.
- Nueve textos de servicio más cortos y directos; estados y aclaraciones necesarias se mantienen en la tarjeta.
- Más aire uniforme entre título de cada familia, slider y tarjetas en PC y móvil emulado.
- Su web + IA muestra $50.000 con “COP · Pago único” en una línea secundaria legible y un botón rojo de acción a la derecha. “Pague contra entrega, al verla online” queda exclusivamente en el modal.
- Los iconos y los símbolos de capacidades de la tarjeta web usan círculos discretos y acento coral/rojo con una gama contenida. La tarjeta destacada tiene borde y sombras reducidas.
- Modal más sobrio: beneficios/condiciones en coral Sapien, scrollbar del carrusel oculto sin desactivar el deslizamiento. El texto de pago acordado sigue visible. La acción de solicitud solo cierra la demostración: no envía ni guarda.
- Se observó en producción el comportamiento actual del velo móvil (fondo de navegación traslúcido y cabecera con desvanecimiento progresivo). Se documenta, no se cambia.

## Validación

Se inspeccionaron escritorio y emulación responsive a 320, 360 y 390 CSS px. Se probó el modal y la interacción local de Antonella; no mueve la página al enviar. El texto de precio, la ubicación del pago y la estructura se cotejaron. Las referencias estáticas de la página revisadas responden HTTP 200.

**Límites:** la consola del navegador mostró un error genérico 404 sin URL identificable; las rutas estáticas conocidas sí respondieron 200, pero no afirmamos consola sin errores. No se probó con teléfono/teclado real ni instalación PWA.

Antonella IA sigue siendo una demo local de respuestas por reglas: no consulta Gmail, el negocio, monitorización real ni un modelo conectado; no guarda conversaciones ni realiza acciones. Integraciones/API reales necesitan autorización, backend seguro y QA independiente.

V48 corrects the final modal selector to target its actual DOM placement outside .app, unifying assurances to coral and hiding the visible scrollbar without disabling swipe.
