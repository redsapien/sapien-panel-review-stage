# Sapien · revisión aislada V23

Vista pública de revisión para `panel.redsapien.co`; no es una cuenta operativa ni tiene conexión con producción. El contenido y la hoja visual parten del panel, pero autenticación, Supabase y escrituras externas están retirados.

- Sapien se muestra en la misma posición superior y alrededor de 30% más pequeño, con fondo translúcido muy sutil.
- Se reemplazaron los nueve pictogramas por la última propuesta V6. Conservan la caja productiva de 32 × 32 px y el dibujo de 22 × 22 px. Un aro fino toma un acento propio por icono y aumenta suavemente al pasar cursor o recibir foco.
- Menú, engranaje, volver, X de los modales y flechas comparten halos circulares rojos. No se añadieron márgenes ni superficies al tamaño de los controles.
- La trama neuronal del fondo es decorativa, está detrás del catálogo, no bloquea toques ni añade altura de página.
- Se redujo el espacio sobrante de bienvenida/encabezados en móvil; la etiqueta «Marketing y automatización» aparece sobre la navegación inferior a 320/360/390 px. La geometría, tipografía, textos y precios de las tarjetas se cotejaron contra el HTML actual.
- Detalle del servicio, navegación, carruseles, menús y controles X se prueban en local. «Pedir ahora» abre una solicitud de demostración; «Listo» solo cierra y avisa que no se envió. No se capturan teléfonos, archivos ni datos; auth y guardado siguen apagados.
- El nombre de negocio puede escribirse en el perfil para previsualizar nueve preguntas cortas; se conserva solo en la sesión de esa pestaña. El copy aprobado, incluido «Nosotr@s», se mantiene.
- Los manifiestos e iconos para PWA se limitan a este espacio de prueba. No se verificó instalación en teléfono físico.

Revisión en navegador: escritorio 1366 px y página de QA emulada 320/360/390 px. No equivale a QA de dispositivo real. La página es pública para quien tenga el enlace. No se modificó ni se publicó el panel productivo.
