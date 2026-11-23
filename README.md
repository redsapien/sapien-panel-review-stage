# Sapien · revisión aislada V36

Staging público independiente para revisar identidad y experiencia de uso. El panel productivo no se modificó.

- El modal de detalles ya no incluye el bloque del dominio/dirección sugerida.
- «Sapien IA» usa texto compacto, tres sugerencias breves y un campo simple. Enter envía y Shift+Enter permite nueva línea. La demostración local devuelve orientación general por tema (ventas, presencia web, automatización o precios) tras una animación corta. Aclara que no analiza datos ni consulta una IA real; no guarda ni envía el texto.
- En móvil, un listener de `visualViewport` reajusta la altura útil y lleva el campo a la vista. Probado en anchos CSS emulados, no con teclado físico de teléfono.
- Notificaciones usa el mismo icono de campana tech en su cabecera y estado vacío, separado del icono de «Info y más».
- Volver, X y cerrar mantienen círculo rojo común de 44 × 44 px, halo y transición. Iconos de tarjetas quedan centrados en círculos de color.
- Fondo neural muy sutil. Títulos y textos de las nueve tarjetas de servicio, salvo las modificaciones previamente pedidas, se cotejaron con la fuente de producción; la tarjeta web muestra el precio y «Pago contra entrega».

**QA:** escritorio y emulación CSS de 320/360/390 px; flujo de chat local y modal probados. Página y recursos estáticos responden HTTP 200; carga fresca V36 sin errores de consola. No equivale a instalación PWA o QA en dispositivo físico.

La prueba es pública. Inicio de sesión, guardado, envío de solicitudes, pagos, API de IA, micrófono, adjuntos, Push e integraciones permanecen desconectados.
