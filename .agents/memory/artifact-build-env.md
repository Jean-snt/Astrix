---
name: Build de artefactos web
description: Requisito de entorno para compilar aplicaciones web registradas como artefactos.
---

Los builds manuales de aplicaciones web registradas como artefactos deben ejecutarse con `PORT` y `BASE_PATH` definidos; el workflow administrado los inyecta automáticamente.

**Why:** La configuración Vite del artefacto valida ambos valores al cargar, por lo que un build local sin ellos falla antes de transformar el código aunque la aplicación esté correcta.

**How to apply:** Para una comprobación manual, usa los valores del bloque `[services.env]` del artefacto; para el workflow, reinicia el servicio administrado y no crees un workflow alternativo.