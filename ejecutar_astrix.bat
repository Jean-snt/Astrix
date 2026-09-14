@echo off
title ASTRIX S.A.C. - Web App Corporativa 2026
cls
echo ======================================================================
echo           ASTRIX S.A.C. - EL NUCLEO TECNOLOGICO DE LAS EMPRESAS
echo ======================================================================
echo.
echo  Iniciando servidor local para visualizacion web...
echo.

:: Abrir navegador en segundo plano en http://localhost:5000
start "" "http://localhost:5000"

:: Cambiar al directorio del proyecto web
cd /d "%~dp0artifacts\astrix-web"

:: Ejecutar servidor Vite local en puerto 5000
npx vite --port 5000 --host 0.0.0.0

pause
