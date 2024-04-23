// Integration and unit tests for game functionalities
const request = require('supertest');
const app = require('../app');

// Tests for game functionalities
// Test for user registration
test('User Registration test', async () => {
    let response = await request(app).post('/api/users/register').send({name: 'John Doe'});
    headers { content-type: application/json }
    expect(response.status).toBe(400);
    expect(response.body).data.to contain('John Doe');
    expect(response.body.error).toBeNotdefined();
});