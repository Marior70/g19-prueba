# Observaciones del proyecto
1. No se observa un patrón de diseño y el sitio resultante carece de navegabilidad teniendo sólo 2 funcionalidades independientes.
2. El resto de las observaciones son consecuencia directa del punto 1.

## Detalles:
0. No se utiliza una estructura jerárquita de carpetas y archivos. Esto perjudica a la lógica general del proyecto.
1. Identificadores sin normalizar; Se debe adoptar alguna opción como camelCase, separado_por_guion, etc
2. No hay configurado un layout responsive
3. No hay header ni nav del sitio
4. No tiene al menos 4 páginas de navegabilidad
5. No hay utilización de etiquetas semánticas, más allá de algunas pocas.
6. El footer no es lugar para los iframe. Ese contenido estaría bien en etiquetas ASIDE dentro de MAIN
7. No se debe utilizar <br> para conseguir separar elementos html, se distancian con CSS
8. No hay buena visibilidad de contenido, falta estandarizar margin y/o padding en contenedores

cuenta.css: no está utilizada por ningún *.html ni tampoco importada desde otro *.css

font-family: default, verdana, 'Poppins', sans-serif;

