// server/index.js
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App";
import fs from "fs";
import path from "path";

const app = express();

app.use(express.static("build"));

app.get("*", (req, res) => {
	const context = {};
	const appHtml = renderToString(
		<StaticRouter location={req.url} context={context}>
			<App />
		</StaticRouter>
	);

	const indexFile = path.resolve("./build/index.html");
	fs.readFile(indexFile, "utf8", (err, data) => {
		if (err) {
			console.error("Something went wrong:", err);
			return res.status(500).send("Oops, better luck next time!");
		}

		return res.send(
			data.replace(
				'<div id="root"></div>',
				`<div id="root">${appHtml}</div>`
			)
		);
	});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
