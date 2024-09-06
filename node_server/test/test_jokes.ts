import { Hono } from "hono";
import { expect } from "jsr:@std/expect";
import { testClient } from "hono/testing";


Deno.test("test /", async () => {
	const app = new Hono().get("/search", (c) => c.json({ hello: "world" }));
	const res = await testClient(app).search.$get();

	expect(await res.json(), JSON.stringify({ hello: "world" }));
});


Deno.test("test /jokes", async () => {
	const app = new Hono().get("/jokes", (c) => c.json({ joke: "Why did the chicken cross the road?" }));
	const res = await testClient(app).jokes.$get();

	expect(await res.json(), JSON.stringify({ joke: "Why did the chicken cross the road?" }));
});

Deno.test("test /jokes/:id", async () => {
	const app = new Hono().get("/jokes/:id", (c) =>
		c.json({ joke: "Why did the chicken cross the road?" })
	);
	
	const res = await testClient(app).jokes[':id'].$get({
		param: {
			id: "1",
		},
	});

	expect(await res.json(), JSON.stringify({
		joke: "Why did the chicken cross the road?",
	}));
});
