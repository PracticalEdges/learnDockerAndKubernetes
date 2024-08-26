import path from "path";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import crudRouter from "./router/crud";
import App from "../src/App";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3006;
const app = express();
app.use(express.static("./build"));

app.use('/users', crudRouter);

app.get("/", (_, res) => {
	const app = ReactDOMServer.renderToString(<App />);
	const indexFile = path.resolve("./build/index.html");

	fs.readFile(indexFile, "utf8", (err, data) => {
		if (err) {
			console.error("Something went wrong:", err);
			return res.status(500).send("Oops, better luck next time!");
		}

		return res.send(
			`<!DOCTYPE html>
            <html lang="en">
                <head>
                    <title>React App</title>
                </head>
                <body>
                    <noscript>You need to enable JavaScript to run this app.</noscript>
                    <div id="root">${app}</div>
                    <script src="/static/js/bundle.js"></script>
                    <script src="/static/js/1.chunk.js"></script>
                    <script src="/static/js/main.chunk.js"></script>
                </body>
            </html>`
		);
	});
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
})
