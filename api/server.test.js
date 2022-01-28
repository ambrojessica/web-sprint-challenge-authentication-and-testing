//import
const request = require('supertest');
const server = require('./server');
const db = require('../data/dbConfig');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
// beforeEach(async () => {
//   await db.seed.run();
// });
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
    expect(res.body).toMatchObject({
      username: 'captain'
    });
  });
});;


//2 tests for post login



//2 tests for get dad jokes
