const app = require('../app');
const request = require('supertest');
const { Car, User, Role } = require('../app/models');
const AuthenticationController = require('../app/controllers/AuthenticationController');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { faker } = require('@faker-js/faker');

const AuthController = new AuthenticationController({ User, Role, bcrypt, jwt });

describe('Test Cars API endpoint', () => {

const mockCar = {
    name: faker.vehicle.model(),
    price: faker.random.numeric(6),
    image: faker.image.imageUrl(),
    size: 'MEDIUM'
};

const mockCustomer = AuthController.createTokenFromUser(
    {
      id: 12,
      name: faker.name.fullName(),
      email: faker.internet.email(),
      image: faker.image.imageUrl(),
    },
    {
      id: 1,
      name: 'CUSTOMER',
    }
);

const mockAdmin = AuthController.createTokenFromUser(
    {
      id: faker.random.numeric(2),
      name: faker.name.fullName(),
      email: faker.internet.email(),
      image: faker.image.imageUrl(),
    },
    {
      id: 2,
      name: 'ADMIN',
    }
);

describe('GET / => Home', () => {
    it('should respond with 200 Ok', async () => {
        await request(app)
        .get('/')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200);
    });
});

describe('GET /v1/cars => Get all cars', () => {
    it('should respond with 200 Ok', async () => {
        await request(app)
        .get('/v1/cars')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200);
    });
});

describe('GET /v1/cars/:id => Get a car by id', () => {
    it('should respond with 200 Ok', async () => {
        const car = await Car.create(mockCar);
        await request(app)
        .get(`/v1/cars/${car.id}`)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200);
    });
});

describe('POST /v1/cars => Create a Car', () => {
    it('should respond with 201 Created', async () => {
        await request(app)
        .post('/v1/cars')
        .set({Authorization: `Bearer ${mockAdmin}`})
        .send(mockCar)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(201);
    });

    it('should respond with 401 Unauthorized', async () =>{
        await request(app)
        .post('/v1/cars')
        .send(mockCar)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(401);
    });

    it('should respond with 401 Unauthorized', async () =>{
        await request(app)
        .post('/v1/cars')
        .send(mockCar)
        .set({Authorization: `Bearer ${mockCustomer}`})
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(401);
    });
});

describe('PUT /v1/cars/:id => Update a Car', () => {
    const mockCarUpdate = {
        name: faker.vehicle.model(),
        price: faker.random.numeric(6),
        image: faker.image.imageUrl(),
        size: 'SMALL'
    };

    it('should respond with 200 ok', async () => {
        const car = await Car.create(mockCar);
        await request(app)
        .put(`/v1/cars/${car.id}`)
        .send(mockCarUpdate)
        .set({Authorization: `Bearer ${mockAdmin}`})
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200);
    });

    it('should respond with 401 Unauthorized', async () => {
        const car = await Car.create(mockCar);
        await request(app)
        .put(`/v1/cars/${car.id}`)
        .send(mockCarUpdate)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(401);
    });

    it('should respond with 401 Unauthorized', async () => {
        const car = await Car.create(mockCar);
        await request(app)
        .put(`/v1/cars/${car.id}`)
        .send(mockCarUpdate)
        .set({Authorization: `Bearer ${mockCustomer}`})
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(401);
    });
});

describe('DELETE /v1/cars/:id => Delete a car', () => {
    it('should respond with 204', async () => {
        const car = await Car.create(mockCar);
        await request(app)
        .delete(`/v1/cars/${car.id}`)
        .set({Authorization: `Bearer ${mockAdmin}`})
        .expect(204);
    });

    it('should respond with 401 Unauthorized', async () => {
        const car = await Car.create(mockCar);
        await request(app)
        .delete(`/v1/cars/${car.id}`)
        .expect(401);
    });

    it('should respond with 401 Unauthorized', async () => {
        const car = await Car.create(mockCar);
        await request(app)
        .delete(`/v1/cars/${car.id}`)
        .set({Authorization: `Bearer ${mockCustomer}`})
        .expect(401);
        console.log(mockCustomer)

    });
});

describe('POST /v1/cars/:id/rent => Customer rent a car', () => {
    const rentDate = {
        rentStartedAt: faker.date.future(),
        rentEndedAt: faker.date.future()
    };

    it('should respond with 201 Created', async () => {
        const car = await Car.create(mockCar);
        await request(app)
        .post(`/v1/cars/${car.id}/rent`)
        .set({Authorization: `Bearer ${mockCustomer}`})
        .send(rentDate)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(201);
    });
});

});