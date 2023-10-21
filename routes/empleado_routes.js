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
 *          Usuarios:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                  name:
 *                      type: string
 *                  age:
 *                      type: integer
 *              example:
 *                  id: 1
 *                  name: Juan
 *                  age: 25
 *
 *
 */

router.get("/empleados", getAllEmpleados);

router.get("/empleados/:id", getEmpleadoById);

router.post("/empleados", createEmpleado);

router.put("/empleados/:id", updateEmpleadoById);

router.delete("/empleados/:id", deleteEmpleadoById);

export default router;
