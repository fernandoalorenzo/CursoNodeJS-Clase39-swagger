# clase39-swagger
Clase 39 - Asincronica - Swagger + BD + Github

## Dependencias

Tenés que tener instalado antes de ejecutar la aplicación:

- Node.js  
- npm
- MySQL

Para instalar las dependencias, tenés que situarte en la carpeta del proyecto y usa el siguiente comando:

npm install

## Archivo empleado_routes.js

Este archivo define las rutas de la aplicación para gestionar empleados.

### Rutas Disponibles

- GET /empleados
  - Descripción: Obtiene todos los empleados.
  - Respuesta: Retorna un JSON con la lista de empleados.

- GET /empleados/:id
  - Descripción: Obtiene un empleado específico por su ID.
  - Parámetros de la URL:
    - `id`: El ID del empleado que se desea obtener.
  - Respuesta:
    - Si el empleado se encuentra, retorna un JSON con la información del empleado.
    - Si el empleado no se encuentra, retorna un mensaje de error y un código de estado 404.

- POST /empleados
  - Descripción: Crea un nuevo empleado.
  - Parámetros del cuerpo de la solicitud (en formato JSON):
    - `nombre`: El nombre del nuevo empleado.
    - `teléfono`: El teléfono del nuevo empleado.
    - `email`: El email del nuevo empleado.
    - `edad`: La edad del nuevo empleado.
  - Respuesta: Retorna un mensaje indicando que el nuevo empleado ha sido agregado.

- PUT /empleados/:id
  - Descripción: Actualiza la información de un empleado existente.
  - Parámetros de la URL:
    - `id`: El ID del empleado que se desea actualizar.
  - Parámetros del cuerpo de la solicitud (en formato JSON):
    - `nombre`: El nombre del nuevo empleado.
    - `teléfono`: El teléfono del nuevo empleado.
    - `email`: El email del nuevo empleado.
    - `edad`: La edad del nuevo empleado.
  - Respuesta:
    - Si el empleado se encuentra, retorna un JSON con la información actualizada del empleado.
    - Si el empleado no se encuentra, retorna un mensaje de error y un código de estado 404.

- DELETE /empleados/:id
  - Descripción: Elimina un empleado existente.
  - Parámetros de la URL:
    - `id`: El ID del empleado que se desea eliminar.
  - Respuesta:
    - Si el empleado se encuentra, retorna un JSON con la información del empleado eliminado.
    - Si el empleado no se encuentra, retorna un mensaje de error y un código de estado 404.
