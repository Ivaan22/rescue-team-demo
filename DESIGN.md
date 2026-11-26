# Dirección de diseño · Cuaderno operativo

## Idea

Una libreta de campo digital para una empresa de rescate industrial. La unidad de trabajo es el servicio. La agenda abre un único espacio con tres etapas; los recursos se gestionan en contexto, sin secciones administrativas independientes.

## Identidad

- Logo original intacto; lettering auxiliar RESCUE TEAM en dos líneas.
- Papel cálido `#F4F2EB`, tinta `#1C272A`, cabecera `#192B30`, amarillo de acción `#F2DC3A`, oliva secundario. Rojo documental `#A72B32`; los estados siempre incluyen texto.
- Barlow Condensed para títulos y numerales; DM Sans para lectura e interacción; IBM Plex Mono para referencias breves.
- Iconos SVG propios en retícula de 24 unidades: casco, mosquetón, cuaderno, cámara, bandera y documento. Ilustración técnica de casco o formación según servicio, sin afirmar capacidades operativas.
- Composición de agenda y hoja de trabajo, bordes rectos, líneas finas y espacios abiertos. La interfaz no usa tarjetas de métricas de relleno.

## Movimiento

- Trazo de la ilustración al abrir otro servicio, 1.8 s, una vez.
- Entrada de etapa de 350 ms; controles con transiciones de 200 ms; sin bucles ni parallax.
- `prefers-reduced-motion` elimina animaciones/transiciones y deja los dibujos completos.

## Interacción

- En móvil, la agenda comienza plegada bajo “Ver otros servicios”; las etapas permanecen visibles al desplazarse.
- Pendientes visibles en todos los tamaños; los vencimientos no se ocultan al marcar el checklist.
- Foco de teclado visible, modales nativos con Escape, botones de al menos 40–46 px para acciones principales. Formularios móviles con texto de 16 px donde corresponde.
- El reporte es texto HTML imprimible, con logo y pendientes incluidos. No rasteriza el contenido.

## Alcance deliberado

Tres etapas y una agenda. Sin dashboard, inventario separado, CRM, GPS, chat, IA decorativa, estadísticas ficticias ni promesas de certificación. El prototipo demuestra un recorrido completo, no una suite administrativa.
