var request = require('supertest').agent('https://jsonplaceholder.typicode.com');

describe('GET /reponse.json', function () {
    it('Should return with the expected body.', async done => {
        const response = await request.get('/todos/1');
        expect(response.status).toBe(200);
        expect(response.body.id).toBe(1);
        expect(response.body.title).toEqual('delectus aut autem');
        done();
    })
})