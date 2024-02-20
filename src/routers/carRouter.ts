import express from 'express';
import { getCars, createCar, updateCar, deleteCar } from '../controllers/carController';
import upload from '../middlewares/upload';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Cars
 *   description: API operations related to cars
 */

/**
 * @swagger
 * /cars:
 *   get:
 *     summary: Get all cars
 *     tags: [Cars]
 *     responses:
 *       200:
 *         description: List of cars
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Car'
 */

router.get('/cars', getCars);

/**
 * @swagger
 * /cars:
 *   post:
 *     summary: Create a new car
 *     tags: [Cars]
 *     requestBody:
 *       description: Car data
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/CarRequest'
 *     responses:
 *       201:
 *         description: Car created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 */

router.post('/cars', upload.single('image'), createCar);

/**
 * @swagger
 * /cars/{id}:
 *   put:
 *     summary: Update a car by ID
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the car to be updated
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Updated car data
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/CarRequest'
 *     responses:
 *       200:
 *         description: Car updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 */

router.put('/cars/:id', upload.single('image'), updateCar);

/**
 * @swagger
 * /cars/{id}:
 *   delete:
 *     summary: Delete a car by ID
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the car to be deleted
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Car deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A success message
 */

router.delete('/cars/:id', deleteCar);

export default router;
