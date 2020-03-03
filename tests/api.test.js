import { OK } from 'http-status-codes';
import * as request from 'supertest';
import configuration from '../configuration'
import * as todoItems from './data/todos';

describe('GET /todos', function () {
    it('Should return item with the expected body.', async done => {
        const expectedTodoItem = todoItems['expectedTodoItem'];
        const response = await request(configuration.url).get('/todos/1');
        expect(response.status).toBe(OK);
        expect(response.body.id).toBe(expectedTodoItem.id);
        expect(response.body.title).toBe(expectedTodoItem.title);
        expect(response.body).toEqual(expectedTodoItem);
        done();
    })
})