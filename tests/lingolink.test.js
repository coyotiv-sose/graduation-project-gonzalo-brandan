const request = require('supertest')
const app = require('../src/app')
const user = require('../src/models/user')

describe('Lingolink', () => {
  it('should create a User', async () => {
    const name = 'Gonzalo'
    const expectedOutput = {
      name,
      tandems: [],
    }
    const actualOutput = await request(app).post('/users').send(expectedOutput)

    expect(actualOutput.body).toMatchObject(expectedOutput)
    expect(actualOutput.body._id).toBeDefined()
    expect(actualOutput.body.tandems).toStrictEqual([])
  })

  it('can create a Tandem', async () => {
    const gonzalo = await request(app).post('/users').send({
      name: 'Gonzalo',
    })

    const maria = await request(app).post('/users').send({
      name: 'Maria',
    })

    const expectedOutput = {
      user: gonzalo.body._id,
      partner: maria.body._id,
      language: 'Spanish',
      date: '2020-01-01',
      time: '12:00',
    }

    const actualOutput = await request(app)
      .post('/tandems')
      .send({ user: gonzalo.body._id, partner: maria.body._id, language: 'Spanish', date: '2020-01-01', time: '12:00' })

    expect(actualOutput.body).toMatchObject(expectedOutput)
    expect(actualOutput.body._id).toBeDefined()
  })
})
