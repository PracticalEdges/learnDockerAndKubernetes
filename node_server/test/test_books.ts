import { Hono } from "hono";
import { expect } from "jsr:@std/expect";
import { testClient } from "hono/testing";

Deno.test("test /", async () => {
    const app = new Hono().get("/search", (c) => c.json({ hello: "world" }));
    const res = await testClient(app).search.$get();

    expect(await res.json(), JSON.stringify({ hello: "world" }));
});

Deno.test("test /books", async () => {
    const app = new Hono().get("/books", (c) => c.json({ book: "The Great Gatsby" }));
    const res = await testClient(app).books.$get();

    expect(await res.json(), JSON.stringify({ book: "The Great Gatsby" }));
});

Deno.test("test /books/:id", async () => {
    const app = new Hono().get("/books/:id", (c) =>
        c.json({ book: "The Great Gatsby" })
    );
    
    const res = await testClient(app).books[':id'].$get({
        param: {
            id: "1",
        },
    });

    expect(await res.json(), JSON.stringify({
        book: "The Great Gatsby",
    }));
});