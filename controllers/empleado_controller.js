import { pool } from '../index.js';

// Crear un registro de Empleado
const createEmpleado = async (req, res) => {
	const { nombre, telefono, email, edad } = req.body;
	try {
		const [result] = await pool.query(
			"INSERT INTO empleados (nombre, telefono, email, edad) VALUES (?, ?, ?, ?)",
			[nombre, telefono, email, edad]
		);
		res
			.status(201)
			.json({ id: result.insertId, nombre, telefono, email, edad });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Error al crear un nuevo registro de Empleado" });
	}
};

// Muestra todos los registros de Empleados de la tabla
const getAllEmpleados = async (req, res) => {
	try {
		const [rows] = await pool.query("SELECT * FROM empleados");
		res.status(200).json(rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Error al cargar todos los registros de la tabla de Empleados" });
	}
};

// Muestra un registro de la tabla de Empleados por ID recibido
const getEmpleadoById = async (req, res) => {
	const empleadoId = req.params.id;
	try {
		const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [
			empleadoId,
		]);
		if (rows.length === 0) {
			res.status(404).json({ error: "Empleado no encontrado" });
		} else {
			res.status(200).json(rows[0]);
		}
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Error al cargar un registro de la tabla de Empleados" });
	}
};

// Actualiza un registro de la tabla de Empleados por ID recibido - Método PUT
const updateEmpleadoById = async (req, res) => {
	const empleadoId = req.params.id;
	const { nombre, telefono, email, edad } = req.body;
	try {
		const [result] = await pool.query(
			"UPDATE empleados SET nombre = ?, telefono = ?, email = ?, edad = ? WHERE id = ?",
			[nombre, telefono, email, edad, empleadoId]
		);
		if (result.affectedRows === 0) {
			return res.status(404).json({ error: "Empleado no encontrado" });
		}
		res.status(200).json({ id: empleadoId, nombre, telefono, email, edad });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Error al actualizar un registro de la tabla de Empleados" });
	}
};

const deleteEmpleadoById = async (req, res) => {
	const empleadoId = req.params.id;
	try {
		const [result] = await pool.query("DELETE FROM empleados WHERE id = ?", [
			empleadoId,
		]);
		if (result.affectedRows === 0) {
			return res.status(404).json({ error: "Empleado no encontrado" });
		}
		res.status(204).end(); // Respond with a 204 No Content status
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Error al intentar eliminar un registro de la tabla de Empleados" });
	}
};

export {
	createEmpleado,
	getAllEmpleados,
	getEmpleadoById,
	updateEmpleadoById,
	deleteEmpleadoById,
};
