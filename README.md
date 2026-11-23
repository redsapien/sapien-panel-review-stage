# Sapien · revisión aislada V25

Esta es una propuesta pública de staging independiente; producción `panel.redsapien.co` no se modificó.

- Menú hamburguesa 20% más grande, conservando el blanco de toque y posición. Los botones de volver y cerrar comparten círculo de 44 px, borde y halo rojo.
- Pictogramas de servicio 20% más grandes (26,4 px dentro de su caja original de 32 px). Tarjetas mantienen sus textos y precios fuente.
- Nuevo texto aprobado de bienvenida: «Creamos todo y lo dejamos en automático. Usted ve crecer su negocio y vender más.»
- Iconos de navegación del sistema con trazos y halo tech. «Hablemos» cambia a «Una IA».
- Una IA es un prototipo local: permite escribir o tocar sugerencias, ver animación/estados de procesamiento y una respuesta que aclara que el agente real aún no está conectado. No llama APIs, no persiste texto, no usa micrófono ni adjuntos y no envía contenido.
- «Info y más» tiene estados vacíos más breves y bloques más fáciles de recorrer. Catálogo y copy de servicios permanecen fieles a la fuente.
- Se recortó espacio vertical sobrante y una parte del padding de tarjetas para mostrar más del catálogo en el primer pliegue. No se estrechan las tarjetas.
- Se revisaron las capturas que compartió Cristian y se usó la estructura clara del chat como referencia; no se copiaron logos ni marca de Zapia.

Verificación navegador emulado no sustituye QA en teléfono físico, instalación PWA ni conexión real del agente.

- V25 corrige el primer pliegue observado a 320 px: la bienvenida usa todo el ancho de contenido y se elimina el margen residual bajo la primera hilera; no se altera el ancho ni el texto de tarjetas.
