# Rescue Team · Cuaderno operativo

MVP interactivo para presentar a Sergio. Un servicio, tres pasos: **Preparar → Registrar → Entregar**.

[Demo pública](https://ivaan22.github.io/rescue-team-demo/)

## Alcance funcional

- Agenda: crear y editar servicios, buscar, ver abiertos/finalizados.
- Preparar: asignar personal y equipos, agregar recursos, editar vencimientos, marcar preparación documental y guardar notas. Los faltantes de recursos y documentos vencidos se calculan independientemente del checklist.
- Registrar: bitácora con fecha/hora y hasta seis fotos comprimidas por servicio.
- Entregar: vista previa del reporte, impresión/guardado como PDF desde el navegador, finalizar y reabrir un servicio.
- Persistencia local compatible con la primera demo; restablecimiento con confirmación.
- Guía interna de tres minutos, interfaz adaptable y movimiento reducido.

Personas, clientes y equipos son ejemplos ficticios. El logo es el aportado por el usuario y pertenece a Rescue Team.

## Límites de esta versión

No incluye cuentas, backend, sincronización, certificados originales, firmas ni autorización operativa. Los cambios quedan en el navegador y no se comparten entre dispositivos. Finalizar un servicio solo lo mueve de categoría en la agenda; los pendientes siguen visibles en el reporte. El estado documental no acredita aptitud ni certificación. Usar datos e imágenes de prueba.

## Desarrollo y verificación

Sin dependencias de ejecución ni compilación. Node.js 22 o superior:

```sh
node scripts/serve.mjs
node --test tests/domain.test.mjs
node tests/e2e.cjs
```

Abrir `http://127.0.0.1:4173`. E2E requiere Playwright y Microsoft Edge; permite `PLAYWRIGHT_PATH` para una instalación externa y `DEMO_URL` para verificar otro despliegue. Los resultados se guardan en `test-results/` (ignorado por Git).

El sitio está en la raíz. GitHub Pages publica `main` + `/`. Google Fonts tiene familias locales de respaldo. No hay secretos ni configuración de servicios externos.

## Recorrido para presentar

1. Abrir RT-001: elegir recursos y resolver el pendiente documental.
2. Registrar una actividad y una foto de prueba.
3. Revisar el reporte y guardar como PDF. Mostrar que los datos persisten al recargar.
4. Conversar con Sergio sobre qué solicita su cliente y qué parte le ahorraría trabajo.

La siguiente fase se define con Sergio, Tato y José: flujo real, documentación, roles y condiciones comerciales antes de sumar funcionalidades. Este prototipo no presupone precios, acuerdos ni certificaciones.
