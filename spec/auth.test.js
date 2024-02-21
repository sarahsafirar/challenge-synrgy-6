const app = require('../app');
const request = require('supertest');
const { faker } = require('@faker-js/faker');
const { User, Role } = require('../app/models');
const AuthenticationController = require('../app/controllers/AuthenticationController');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const AuthController = new AuthenticationController({ User, Role, bcrypt, jwt });

describe('Test Auth API endpoint', () => {
const mockUser = {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(10)
};

const mockCustomerToken = AuthController.createTokenFromUser(
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

describe('POST /v1/auth/register => Create/Register a User', () => {
    it('should respond with 201 Created', async () => {
        await request(app)
        .post('/v1/auth/register')
        .send(mockUser)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(201);
    });
});

describe('POST /v1/auth/login => User login', () => {

    it('should respond with 404 Not Found', async () => {
        await request(app)
        .post('/v1/auth/login')
        .send({
            email: "test",
            password: "12345",
        })
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(404);
    });
});

describe('GET /v1/auth/whoami => Get info of current user', () => {
    it('should respond with 200 Created', async () => {
        await request(app)
        .get('/v1/auth/whoami')
        .set({Authorization: `Bearer ${mockCustomerToken}`})
        .expect(200);
    });
});
});