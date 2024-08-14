import { Hono } from 'hono'
import joke from "./router/jokes.ts";
import book from "./router/books.ts";

const app = new Hono()

app.get('/', (c: any) => {
  return c.text('Hello Hono!')
});

app.route("/jokes", joke);
app.route("/books", book);

Deno.serve(app.fetch)
