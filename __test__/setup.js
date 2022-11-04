import request from 'supertest';
import app from '../app.js';

before(async () => {  
  // create user
  const payload = {
    'name': 'teast',
    'email': 'test@test.com',
    'password': 'test1234'
  }
  await request(app).post('/auth/register').send(payload);
});