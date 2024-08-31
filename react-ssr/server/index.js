require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./router/crud");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);

app.use("/user", userRouter);

app.get("/", (req, res) => {
	res.send("Hello World");
});

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
