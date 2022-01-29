//import
const request = require('supertest');
const server = require('./server');
const db = require('../data/dbConfig');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

afterAll(async () => {
  await db.destroy();
});

// Write your tests here
test('sanity', () => {
  expect(true).not.toBe(false);
});

//2 tests for post register 
describe('POST /api/auth/register', () => {
  test('returns a status 201', async () => {
    const res = await request(server)
      .post('/api/auth/register')
      .send({
        username: 'captain',
        password: '123'
      });
    expect(res.status).toBe(201);
  });
  test('returns new user', async () => {
    const res = await request(server)
      .post('/api/auth/register')
      .send({
        username: 'marvel',
        password: '000'
      });
    expect(res.status).toBe(201);
    expect(res.body.username).toBe('marvel');
  });
});;


//2 tests for post login
describe('POST /api/auth/login', () => {
  test('returns logged in user', async () => {
    const res = await request(server)
      .post('/api/auth/login')
      .send({
        username: 'captain',
        password: '123'
      });
    expect(res.body).toMatchObject({
      message: 'welcome, captain'
    });
  });
  test('returns invalid error', async () => {
    const res = await request(server)
      .post('/api/auth/login')
      .send({
        username: '',
        password: '',
      });
    expect(res.status).toBe(401);
  });
  test('returns error', async () => {
    const res = await request(server)
      .post('/api/auth/login')
      .send({
        username: 'captain',
        password: ''
      });
    expect(res.status).toBe(422);
  });
});;


//2 tests for get dad jokes
describe('GET restrict /api/jokes', () => {
  test('unsuccessful log in', async () => {
    const res = await request(server)
      .get('/api/jokes');
    expect(res.status).toBe(401);
  });
  test('returns jokes after complete log in', async () => {
    const res = await request(server)
      .post('/api/auth/login')
      .send({
        username: 'captain',
        password: '123'
      });
    const joke = await request(server)
      .get('/api/jokes')
      .set('Authorization', res.body.token);

    expect(joke.status).toBe(200);
  });
});