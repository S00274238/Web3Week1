import request from "supertest";
import { app } from "../src/app";
import {describe, it, expect} from "vitest";



describe("GET /ping", () => {
    it("should return borya dai deneg", async () => {
        const response = await request(app)
            .get("/ping");

        expect(response.status).toBe(200);

        expect(response.body).toEqual({
            message: "borya dai deneg"
        });
    });
});
