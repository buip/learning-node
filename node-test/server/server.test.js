const request = require('supertest');
const expect = require('expect');
let app = require('./server').app;

describe('Server', () => {
  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found'
          })
        })
        .end(done);
    });
  })
  describe('GET /user', () => {
    it('should return a user', (done) => {
      request(app)
        .get('/user')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Phuong',
            age: 20
          })
        })
        .end(done);
    });
  });
});
