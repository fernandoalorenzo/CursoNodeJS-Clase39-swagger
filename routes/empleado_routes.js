import express from "express";
const router = express.Router();

import {
	createEmpleado,
	getAllEmpleados,
	getEmpleadoById,
	updateEmpleadoById,
	deleteEmpleadoById,
} from "../controllers/empleado_controller.js";

/**
 * @swagger
 *  components:
 *      schemas:
 *          empleados:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                  nombre:
 *                      type: string
 *                  telefono:
 *                      type: string
 *                  email:
 *                      type: string
 *                  edad:
 *                      type: integer
 *              example:
 *                  nombre: Juan
 *                  telefono: 111111111
 *                  email: prueba@email.com
 *                  edad: 25
 *
 *
 */

/**
* @swagger
* /empleados:
*  get:
*    summary: Retorna todo los empleados
*    tags: [empleado]
*    responses:
*      200:
*        description: array con todos los empleados
*        content:
*          application/json:
*            schema:
*              type: array
*              items: 
*                $ref: '#/components/schemas/empleados'
*      500:
*         description: Error al intentar eliminar un registro de la tabla de Empleados
*/
router.get("/empleados", getAllEmpleados);

/**
* @swagger
* /empleados/{id}:
*  get:
*   summary: Retorna un unico empleado
*   tags: [empleado]
*   parameters:
*     - in: path
*       name: id
*       schema:
*         type: number
*       required: true
*       description: Id empleado
*   responses:
*     200:
*       description: empleado por id
*       content:
*         application/json:
*           schema:
*             type: object
*             $ref: '#/components/schemas/empleados'
*     404: 
*       description: empleado no encontrado
*     500:
*       description: Error al intentar eliminar un registro de la tabla de Empleados
*/


router.get("/empleados/:id", getEmpleadoById);
/**
* @swagger
* /empleados:
*  post:
*   summary: Crear nuevo empleado
*   tags: [empleado]
*   requestBody:
*    required: true
*    content:
*     application/json:
*      schema:
*        type: object
*        $ref: '#/components/schemas/empleados'
*   responses:
*     200:
*       description: Empleado creado
*       content:
*          application/json:
*           schema:
*             type: object
*             $ref: '#/components/schemas/empleados'
*     500:
*       description: Error al intentar eliminar un registro de la tabla de Empleados
*/
router.post("/empleados", createEmpleado);

/**
* @swagger
* /empleados/{id}:
*  put:
*   summary: Actualiza empleado
*   tags: [empleado]
*   parameters:
*     - in: path
*       name: id
*       schema:
*         type: number
*       required: true
*       description: Id empleado
*   responses:
*     200:
*       description: Actualizado
*       content:
*         application/json:
*           schema:
*             type: object
*             $ref: '#/components/schemas/empleados'
*     404: 
*       description: empleado no encontrado
*     500:
*       description: Error al intentar eliminar un registro de la tabla de Empleados
*/


router.put("/empleados/:id", updateEmpleadoById);

/**
* @swagger
* /empleados/{id}:
*  delete:
*   summary: Eliminar empleado
*   tags: [empleado]
*   parameters:
*     - in: path
*       name: id
*       schema:
*         type: number
*       required: true
*       description: Id empleado
*   responses:
*     200:
*       description: Eliminado
*     404: 
*       description: empleado no encontrado
*     500:
*       description: Error al intentar eliminar un registro de la tabla de Empleados
*/


router.delete("/empleados/:id", deleteEmpleadoById);

export default router;
