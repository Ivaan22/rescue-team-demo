# Rescue Team · Demo de gestión operativa

Demo navegable para validar con Sergio la preparación, documentación y reporte de servicios. Usa el logo aportado por el usuario; nombres, clientes y recursos son ficticios.

## Alcance

- Resumen con servicios y vencimientos calculados a partir de la fecha local.
- Crear/editar servicios, buscar y filtrar.
- Crear/editar personal y equipos, actualizar referencias y vencimientos.
- Asignar recursos y marcar preparación documental; faltantes calculados automáticamente.
- Agregar bitácora y fotos de prueba; reporte imprimible y guardable como PDF mediante el navegador.
- Guardado local (`localStorage`) y restablecimiento con confirmación.
- Guía de presentación dentro de la app.

No incluye backend, autenticación, sincronización, certificados originales, firmas, certificación, autorización de trabajo ni validación operativa. No introducir información personal o documentación sensible. Cambios en un navegador no se comparten con otras personas. No es una aplicación operativa para emergencias.

## Desarrollo

Sin dependencias de ejecución ni compilación. Node.js 22 o superior:

```sh
node scripts/serve.mjs
node --test tests/domain.test.mjs
```

Abrir `http://127.0.0.1:4173`. Los archivos del sitio están en la raíz; GitHub Pages publica `main` + `/`. Google Fonts es opcional: hay tipografías locales de respaldo.

## Presentación sugerida (5 minutos)

1. Resumen: próximos servicios y vencimientos.
2. Abrir RT-001, asignar personal/equipos y revisar pendientes.
3. Actualizar una ficha desde Documentación y observar el cambio.
4. Agregar una actividad y una foto de prueba.
5. Ver reporte → Imprimir / guardar PDF.
6. Preguntar qué documentos pide el cliente, qué falta y qué parte ahorraría más trabajo.

## Entrega a Involve

Validar con Sergio los documentos, roles y flujo antes de definir el alcance comercial. Una siguiente fase requeriría identidad, permisos, base de datos, almacenamiento seguro, auditoría, respaldos y validación profesional. No se asumen precios ni certificaciones.

El logo pertenece a Rescue Team. Esta demo no declara afiliación, acreditación o aprobación oficial.
