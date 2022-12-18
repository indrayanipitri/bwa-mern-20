import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "./index";

test("harusnya gak bisa diklik kalau ada isDisabled", () => {
    const {container} = render (<Button isDisabled></Button>)

    expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("harusnya keluar text/spinner loading", () => {
    const { container, getByText} = render (<Button isLoading></Button>)

    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(container.querySelector("span")).toBeInTheDocument();
})

test("harusnya ngerender si <tag a> / link eksternal", () => {
    const {container} = render (<Button type="link"  isExternal></Button>)

    expect(container.querySelector("a")).toBeInTheDocument();
})

test("harusnya ngerender <Link> / link internal", () => {
    const { container } = render(<Router><Button type="link" href=""></Button></Router>)

    expect(container.querySelector("a")).toBeInTheDocument();
})