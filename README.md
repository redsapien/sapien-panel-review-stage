# Sapien · revisión aislada V48

Staging aislado. **Producción y su dominio no se modificaron.**

- Lema: “Creamos todo y lo dejamos en automático.”, sin promesa de ventas.
- Descripciones de servicio más cortas, humanas y directas.
- Espaciado coherente entre categorías, sliders y tarjetas.
- La tarjeta Su web + IA resalta $50.000; debajo muestra “COP · Pago único”. Botón rojo “Ver qué incluye” a la derecha. Los términos contraentrega permanecen únicamente en el modal.
- Iconos y símbolos de la tarjeta web con una paleta por familia discreta; círculo translucido sutil; borde de tarjeta más suave.
- Modal simplificado, con condiciones en coral Sapien; la lista de ejemplos sigue deslizable sin barra horizontal permanente.
- Lema, contenidos, CTA y modal se inspeccionaron en escritorio y emuladores CSS 320/360/390 px.
- En producción se observó el velo móvil existente (barra translúcida y desvanecimiento vertical en cabecera), pero no se editó.

## Límites y QA pendiente

Antonella IA sigue siendo una demo local: no entra a Gmail ni usa contexto real del registro, no monitoriza, no invoca un modelo/API y no guarda o ejecuta acciones. La conexión real debe diseñarse, autorizarse y probarse por separado.

La emulación móvil no reemplaza un teléfono físico: queda pendiente confirmar teclado nativo e instalación PWA. La revisión V48 fresca y el modal no mostraron errores de consola; los recursos estáticos enlazados revisados respondieron HTTP 200.

V49 lowers the price/terms and increases the CTA near the bottom of the web card; modal delivery/payment surfaces use subtle translucent charcoal/coral.
