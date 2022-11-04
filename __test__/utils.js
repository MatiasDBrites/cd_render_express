import request from 'supertest';
import app from '../app.js';

async function getToken() {
  const payload = {
    email: 'test@test.com',
    password: '123456'
  };
  const {body} = await request(app).post('/auth/login').send(payload);
  return body.accesstoken;
}

  export default getToken;