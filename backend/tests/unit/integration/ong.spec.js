const request = require('supertest')
const app = require('../../../src/app')

describe('ONG', () => {
    beforeEach(async() => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async () => {
       await connection.destroy()
    })

    it('should be able to create a new ONG', async ( ) =>  {
        const response = await request(app)
        .post('./ongs')
        .send({
            name: "APAdee",
            email: "contato@Gmail.com",
            whatsapp: "87991047534",
            city: "Rio Grande do Sul",
            uf: "SC"
        })

        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveProperty(8)
    })
})