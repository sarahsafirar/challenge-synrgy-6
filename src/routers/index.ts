import express, { Express } from 'express';
import carRoute from './carRouter';
import userRoute from './userRouter';

const app = express();

app.use(express.json());

app.use('/cars', carRoute);
app.use('/users', userRoute); // Corrected to use userRoute for '/users' path

export default app;
