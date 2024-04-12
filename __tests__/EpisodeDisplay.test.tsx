import { CharacterEpisodes, SharedEpisodes } from "@/components/EpisodeDisplay";
// import CharacterSelectionProvider, {
//   CharacterSelection,
// } from "@/context/characterSelection";
// import { CharacterMock, EpisodeMock } from "@/mocks/DataMock";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
// import { useContext, useEffect } from "react";
// import fetchMock from "jest-fetch-mock";
// import resolvedComponent from "@/util/resolvedComponent";

// fetchMock.enableMocks();

// function TestDispatchOnCharacter1(): JSX.Element {
//   const { dispatch } = useContext(CharacterSelection);
//   useEffect(() => {
//     dispatch({ type: "UPDATE_CHARACTER_1", payload: CharacterMock });
//   }, []);
//   return <></>;
// }

describe("EpisodeDisplay renders", () => {
  it("renders heading", () => {
    // @ts-expect-error removing prop for testing
    render(<CharacterEpisodes />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toBeInTheDocument();
  });
  it("heading includes the correct text", () => {
    // @ts-expect-error removing prop for testing
    render(<CharacterEpisodes />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading.innerHTML).toEqual(" - Episodes");
  });

  describe("EpisodeDisplay component for Character 1", () => {
    it("heading includes the correct text", () => {
      render(<CharacterEpisodes list="char1" />);

      const heading = screen.getByRole("heading", { level: 2 });

      expect(heading.innerHTML).toEqual("Character #1 - Episodes");
    });
    //  NextJs Server components not yet supported on Jest
    // it("heading includes the correct text after selecting a character", async () => {
    //   fetch.mockResponse(JSON.stringify(EpisodeMock));
    //   const ResolvedDisplay = await resolvedComponent(
    //     CharacterSelectionProvider({ children: CharacterEpisodes }),
    //     {
    //       list: "char1",
    //     }
    //   );
    //   render(
    //     <CharacterSelectionProvider>
    //       <TestDispatchOnCharacter1 />
    //       <ResolvedDisplay />
    //     </CharacterSelectionProvider>
    //   );
    //   const heading = screen.getByRole("heading", { level: 2 });

    //   expect(heading.innerHTML).toEqual("Character #1 - Episodes");
    // });
  });
  describe("EpisodeDisplay component for Character 2", () => {
    it("heading includes the correct text", () => {
      render(<CharacterEpisodes list="char2" />);

      const heading = screen.getByRole("heading", { level: 2 });

      expect(heading.innerHTML).toEqual("Character #2 - Episodes");
    });
  });
  describe("SharedDisplay component", () => {
    it("heading includes the correct text", () => {
      render(<SharedEpisodes />);

      const heading = screen.getByRole("heading", { level: 2 });

      expect(heading.innerHTML).toEqual("Shared Episodes");
    });
  });
});
