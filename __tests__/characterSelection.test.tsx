import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CharacterSelectionProvider, {
  CharacterSelection,
} from "@/context/characterSelection";
import { useContext, useEffect } from "react";
import { CharacterMock } from "../mocks/DataMock";

function TestingComponent(): JSX.Element {
  const { data } = useContext(CharacterSelection);
  return (
    <>
      <p data-testid="name">{data.char1.name}</p>
      <p data-testid="id">{data.char1.id}</p>
    </>
  );
}
function TestingComponentWithDispatch(): JSX.Element {
  const { data, dispatch } = useContext(CharacterSelection);
  useEffect(() => {
    dispatch({ type: "UPDATE_CHARACTER_1", payload: CharacterMock });
  }, []);
  return (
    <>
      <p data-testid="name">{data.char1.name}</p>
      <p data-testid="id">{data.char1.id}</p>
    </>
  );
}

function TestingComponentWithDispatch2(): JSX.Element {
  const { data, dispatch } = useContext(CharacterSelection);
  useEffect(() => {
    dispatch({ type: "UPDATE_CHARACTER_2", payload: CharacterMock });
  }, []);
  return (
    <>
      <p data-testid="name">{data.char2.name}</p>
      <p data-testid="id">{data.char2.id}</p>
    </>
  );
}

function TestingComponentWithWrongDispatch(): JSX.Element {
  const { data, dispatch } = useContext(CharacterSelection);
  useEffect(() => {
    // @ts-expect-error This is used only for testing.
    dispatch({ type: "UPDATE_CHARACTER", payload: CharacterMock.data });
  }, []);
  return (
    <>
      <p data-testid="name">{data.char2.name}</p>
      <p data-testid="id">{data.char2.id}</p>
    </>
  );
}

describe("CharacterSelection context without dispatch ", () => {
  it("renders a empty name", () => {
    render(
      <CharacterSelectionProvider>
        <TestingComponent />
      </CharacterSelectionProvider>
    );

    const name = screen.getByTestId("name");

    expect(name.innerHTML).toEqual("");
  });
  it("renders a empty id", () => {
    render(
      <CharacterSelectionProvider>
        <TestingComponent />
      </CharacterSelectionProvider>
    );

    const name = screen.getByTestId("id");

    expect(name.innerHTML).toEqual("");
  });
  describe("CharacterSelection context with dispatch ", () => {
    it("renders correct name", () => {
      render(
        <CharacterSelectionProvider>
          <TestingComponentWithDispatch />
        </CharacterSelectionProvider>
      );

      const name = screen.getByTestId("name");

      expect(name.innerHTML).toEqual("Morty Smith");
    });
    it("renders correct id", () => {
      render(
        <CharacterSelectionProvider>
          <TestingComponentWithDispatch />
        </CharacterSelectionProvider>
      );

      const name = screen.getByTestId("id");

      expect(name.innerHTML).toEqual("2");
    });
  });
  describe("CharacterSelection context with dispatch on character 2 ", () => {
    it("renders correct name", () => {
      render(
        <CharacterSelectionProvider>
          <TestingComponentWithDispatch2 />
        </CharacterSelectionProvider>
      );

      const name = screen.getByTestId("name");

      expect(name.innerHTML).toEqual("Morty Smith");
    });
    it("renders correct id", () => {
      render(
        <CharacterSelectionProvider>
          <TestingComponentWithDispatch2 />
        </CharacterSelectionProvider>
      );

      const name = screen.getByTestId("id");

      expect(name.innerHTML).toEqual("2");
    });
  });
  describe("CharacterSelection context with incorrect dispatch", () => {
    it("renders a empty name", () => {
      render(
        <CharacterSelectionProvider>
          <TestingComponentWithWrongDispatch />
        </CharacterSelectionProvider>
      );

      const name = screen.getByTestId("name");

      expect(name.innerHTML).toEqual("");
    });
    it("renders a empty id", () => {
      render(
        <CharacterSelectionProvider>
          <TestingComponentWithWrongDispatch />
        </CharacterSelectionProvider>
      );

      const name = screen.getByTestId("id");

      expect(name.innerHTML).toEqual("");
    });
  });
});
