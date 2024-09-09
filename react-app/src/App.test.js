import { render, screen, act } from "@testing-library/react";
import React from "react";
import App from "./App";

test("renders elements", () => {
	act(() => {
		render(<App />);
	});

	// check buttons
	const linkElement = screen.getByText(/Modify Users/i);
	expect(linkElement).toBeInTheDocument();

	const linkElement2 = screen.getByText(/Add Users/i);
	expect(linkElement2).toBeInTheDocument();

	const linkElement3 = screen.getByText(/Delete Users/i);
	expect(linkElement3).toBeInTheDocument();

	// check table
	const table = screen.getByRole("table");
	expect(table).toBeInTheDocument();
});
