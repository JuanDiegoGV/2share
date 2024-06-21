const app = require('../index')
const request = require('supertest')

const token = 'U2FsdGVkX19Pn/sMWl6YG2o8icdwfQy2Evqpl+Ypf48PHLJcq8oVAtJd68O9aJPKbcGZrEDSzhT9fyvgOYekwAIDxtQUb23dheFUmn7zmQ/NYPfthZ8YnYOh8wV25nIzmUPYJusNXKNq5zkidVngNJ+GdnPsEyesXAPOb518sMlbqhXXLLFBGkiQCvujmdctjJL2LgYY4uwMiyNZqXTQ/fBqR9GEvUhAK8xQoIWsBosimhLI4PKcxLkY3OOeSTo9'

const badToken = 'U2FsjlkdsjfdsdGVkX19Pn/sMWl6YG2o8icdwfQy2Evqpl+Ypf48PHLJcq8oVAtJd68O9aJPKbcGZrEDSzhT9fyvgOYekwAIDxtQUb23dheFUmn7zmQ/NYPfthZ8YnYOh8wV25nIzmUPYJusNXKNq5zkidVngNJ+GdnPsEyesXAPOb518sMlbqhXXLLFBGkiQCvujmdctjJL2LgYY4uwMiyNZqXTQ/fBqR9GEvUhAK8xQoIWsBosimhLI4PKcxLkY3OOeSTo9'

// userProducts
describe('userProducts routes', () => {
  test('no token provided, should respond 400', async () => {
    const response = await request(app).get('/api/userProducts').send()
    expect(response.statusCode).toBe(400)
  })
  test('no token provided, should respond 400', async () => {
    const response = await request(app).post('/api/userProducts').send()
    expect(response.statusCode).toBe(400)
  })
  test('token provided, should respond 200', async () => {
    const response = await request(app).get('/api/userProducts').set('Authorization', `Bearer ${token}`).send()
    expect(response.statusCode).toBe(200)
  })
  test('bad token provided, should respond 400', async () => {
    const response = await request(app).get('/api/userProducts').set('Authorization', `Bearer ${badToken}`).send()
    expect(response.statusCode).toBe(400)
  })
})