import dotenv from 'dotenv';
import dbSetup from '../config/db-setup';
import express from 'express';
import swaggerJsDoc, { Options } from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import route from './routers/index'; // Adjust the path based on your file structure


dbSetup();
dotenv.config({ path: '../.env' })
dotenv.config();

const PORT = process.env.PORT;

const app = express();

const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Binar Cars Express API with Swagger',
      version: '0.1.0',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
    },
    servers: [
      {
        url: `http://localhost:${PORT}/api/`,
      },
    ],
  },
  apis: ['./src/router/car.ts', './src/router/user.ts'], // Adjust the path based on your file structure
};

const specs = swaggerJsDoc(options);

app.use('/api', route);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is currently running at http://localhost:${PORT}`);
});