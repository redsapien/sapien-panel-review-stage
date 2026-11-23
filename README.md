# Sapien · revisión aislada V43

Staging público de evaluación; producción no se modificó.

- **Sapien** es el panel/producto. **Antonella IA** es el nombre del asistente. Interfaz y sugerencias usan lenguaje sencillo para emprendedores, profesionales y dueños de negocio.
- Nueve iconos de servicio comparten línea limpia, círculos translúcidos de halo bajo y acentos apagados por familia; los iconos de navegación/settings usan el mismo lenguaje visual. La S original del wordmark se preserva.
- Categorías y tarjetas tienen separación uniforme, manteniendo textos, orden y geometría de servicio. La tarjeta web muestra $50.000 COP + “Pago único” a la izquierda y “Ver qué incluye” a la derecha; “Pague contra entrega, al verla online” está solamente en el modal.
- “Info y más” conserva sus secciones pero con ritmo, bordes y campana más limpios.
- El campo se enfoca sin desplazar la página; las nuevas respuestas aparecen en el historial interno y conservan turnos previos. El listener de `visualViewport` posiciona el composer sobre el teclado virtual en móvil.

**QA hecho:** navegador en escritorio; flujo de asistente con dos consultas; modal; Info y más; anchos emulados de 320, 360 y 390 CSS px. Sin errores de consola en los flujos probados. 29 referencias locales del HTML y las nuevas imágenes/CSS/JS respondieron HTTP 200.

**QA pendiente:** teléfono físico, teclado virtual nativo, instalación/actualización PWA y prueba integral de producción.

**Límite funcional:** Antonella aún es una demo local de reglas; no usa datos del negocio, modelo de IA o API, no monitorea actividad, no realiza acciones y no guarda chats. La conexión real necesitará autorización, arquitectura segura, permisos, integración y pruebas antes de producción.
