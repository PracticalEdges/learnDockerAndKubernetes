import { Hono } from "hono";

const book = new Hono();

const books: { [key: string]: string } = {
    "1": "The Great Gatsby",
    "2": "To Kill a Mockingbird",
    "3": "1984",
    "4": "Pride and Prejudice",
    "5": "The Catcher in the Rye",
    "6": "The Lord of the Rings",
    "7": "Animal Farm",
    "8": "The Hobbit",
    "9": "Fahrenheit 451",
    "10": "The Book Thief",
};

book.get("/", (c: any) => {
    const random = Math.floor(Math.random() * 10) + 1;
    return c.json({ book: books[random.toString()] });
});

book.get("/:id", (c: any) => {
    const id = c.req.param("id");
    if (!books[id]) {
        return c.json({ error: "Book not found" }, 404);
    }
    return c.json({ book: books[id] });
});

export default book;