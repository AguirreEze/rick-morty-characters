import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import CharacterCard from "../components/CharacterCard";
import { CharacterMock } from "../mocks/DataMock";
import CharacterSelectionProvider from "@/context/characterSelection";

describe("CharacterCard with param value: char1page ", () => {
  it("renders a image", () => {
    render(<CharacterCard data={CharacterMock} param={"char1page"} />);

    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
  });
  it("renders a heading", () => {
    render(<CharacterCard data={CharacterMock} param={"char1page"} />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toBeInTheDocument();
  });
  it("renders a paragraph", () => {
    render(<CharacterCard data={CharacterMock} param={"char1page"} />);

    const paragraph = screen.getByRole("paragraph");

    expect(paragraph).toBeInTheDocument();
  });
  it("gains selected class on click", () => {
    render(
      <CharacterSelectionProvider>
        <CharacterCard data={CharacterMock} param={"char1page"} />
      </CharacterSelectionProvider>
    );
    const container = screen.getByRole("article");

    fireEvent.click(container);
    expect(container).toHaveClass("selected");
  });
});

describe("CharacterCard with param value: char2page ", () => {
  it("gains selected class on click", () => {
    render(
      <CharacterSelectionProvider>
        <CharacterCard data={CharacterMock} param={"char2page"} />
      </CharacterSelectionProvider>
    );
    const container = screen.getByRole("article");

    fireEvent.click(container);
    expect(container).toHaveClass("selected");
  });
});

describe("CharacterCard with wrong param ", () => {
  it("gains selected class on click", () => {
    render(
      <CharacterSelectionProvider>
        <CharacterCard data={CharacterMock} param={"wrongparam"} />
      </CharacterSelectionProvider>
    );
    const container = screen.getByRole("article");

    fireEvent.click(container);
    expect(container).not.toHaveClass("selected");
  });
});
