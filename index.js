import express from 'express';
import { createPool } from 'mysql2/promise';
import empleadoRoutes from './routes/empleados.js';
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define expecificaciones de Swagger
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Node Swagger API - Clase 39",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:10000"
            }
        ]
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`]
}

const app = express();
const PORT = 10000;

// Datos de conexión a la base de datos
const dbConfig = {
	host: "localhost",
	user: "root",
	password: "",
	database: "cursonode2023",
};

app.use(express.json());

// Conecta a la base de datos
export const pool = createPool(dbConfig);

// Verificar conexión
pool.getConnection()
  .then((connection) => {
    console.log('Conexión exitosa');
    connection.release();
  })
  .catch((err) => {
    console.error('Se produjo un error en la conexión a la base de datos:', err);
  });


app.use('/', empleadoRoutes);

app.listen(PORT, () => {
  console.log(`El servidor está escuchando en el puerto ${PORT}`);
});


app.use('/empleados', empleadoRoutes);
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));