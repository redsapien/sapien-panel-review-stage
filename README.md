# Sapien · revisión aislada V50

Staging visual/interactiva local; **no altera producción**.

- Los tres iconos bajo el párrafo de “Su web + IA” se diferencian con un halo neón discreto: coral para web, turquesa para analítica, violeta para IA.
- En el modal, el compromiso de 24 horas lleva un reloj y el pago contra entrega un escudo/pago verde; copy se conserva. Tarjetas compactas carbón translúcido; en pantallas estrechas pasan a filas para mantener legibilidad.
- El icono junto a WhatsApp es mayor y legible. El formulario sigue deshabilitado/solo demostración en staging.
- En “Notificaciones” se quita el icono de campana repetido del estado vacío; queda la campana de encabezado.
- El nombre del negocio del campo local cambia el rótulo del asistente a “Agente de [negocio]”; si no hay negocio, se muestra Antonella IA. Nombre solo en sessionStorage del navegador de prueba; no se lee Gmail ni perfil/registro real y no hay modelo conectado.

Producción conserva por ahora otro párrafo de tarjeta: “Su sitio web para presentar su negocio y facilitar el contacto.” El velo de navegación productivo se observó, pero no se tocó. Backend, notificaciones reales, teclado de hardware y despliegue productivo quedan fuera de esta revisión aislada.

V51 final specificity update ensures distinct but restrained capability-icon colors remain visible in dark and light themes.

V52 gives the app a dynamically named agent in the header, response labels and navigation for the local test business name; the nav keeps the concise label “Mi agente”. The responsive QA page now loads one exact V52 cascade and fresh iframes at 320/360/390 px.

V53 uses “Mi agente” as neutral tab text; inside the assistant, the name is customized to “Agente de [negocio]”.

V54 reduces only the featured web card min-height on mobile to 270px (262px under 380px) to use vertical space more efficiently while preserving the larger CTA and bottom alignment.
