import request from 'supertest';
import chai from 'chai';
import app from '../app.js';
import getToken from './utils.js';
import { before } from 'mocha';
import Guild from '../models/guild.js';


const { expect } = chai;

// test the enpoint of guilds

describe('Test endpoint Guilds', () => {
  let token;
  let guild1;
  let guild2;

  before(async () => {
    token = await getToken();
    guild1 = await Guild.create({
      name: 'Guild 1',
    });
    guild2 = await Guild.create({
      name: 'Guild 2',
    });

    it('should get all guilds', async () => {
      const { body, status } = await request(app)
        .get('/guild')
        .set('Authorization', `Bearer ${token}`);
      expect(status).to.equal(200);
      expect(body).to.be.an('array');
      expect(body.length).to.equal(2);
      expect(body[0].name).to.equal(guild1.name);
      expect(body[1].name).to.equal(guild2.name);
    });
  });
});
