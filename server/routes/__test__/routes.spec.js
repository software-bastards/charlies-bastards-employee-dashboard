const login = require('../../app')
const request = require('supertest')


it('should create a new post', async () => {
   const res = await request(login)
     .post('/login')
     .send({
      email:"test",
      password:"test"
    });
   expect(res.statusCode).toEqual(200);
 });