import makeFakeUser from "../../fixures/user";
import mappers from "../../../src/infrastructure/db";
import models from "../../../src/infrastructure/db/models";

import supertest from "supertest";
import app from "../../../src/server";

describe('User entity test', () => {
    const endpoint = "/users/login";
    const request = supertest(app);
    const user = makeFakeUser();
    beforeAll(() => {
        beforeAll(() => models.sequelize.sync({ force: true }));
        afterAll(() => models.sequelize.sync({ force: true }));
    })
    it("Should throw error", async() => {
        const res = await request.post(endpoint).send(user);
        console.log(res);   
    });
    
})