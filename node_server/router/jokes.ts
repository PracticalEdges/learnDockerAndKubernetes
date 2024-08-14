import { Hono } from "hono";

const joke = new Hono();

const jokes: { [key: string]: string } = {
	"1": "Why did the chicken cross the road?",
	"2": "What fruit do twins love? Pears!",
	"3": "What time is it when people are throwing pieces of bread at your head? Time to duck.",
	"4": "Why was the baby strawberry crying? Because their parents were in a jam.",
	"5": "Why don't you ever see giraffes in middle school? Because they're all in high school.",
	"6": "How do bees brush their hair? With honeycombs!",
	"7": "What do you call a bear with no teeth? A gummy bear.",
	"8": "Why did the tomato turn red? Because it saw the salad dressing!",
	"9": "What do you call a belt made out of watches? A waist of time.",
	"10": "Why did the math book look sad? Because it had too many problems.",
};

joke.get("/", (c: any) => {
	const random = Math.floor(Math.random() * 10) + 1;
	return c.json({ joke: jokes[random.toString()] });
});

joke.get("/:id", (c: any) => {
    const id = c.req.param("id");
	if (!jokes[id]) {
		return c.json({ error: "Joke not found" }, 404);
	}
	return c.json({ joke: jokes[id] });
});

export default joke;