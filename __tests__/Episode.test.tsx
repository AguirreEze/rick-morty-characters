import Episode from "@/components/Episode";
import { EpisodeMock } from "@/mocks/DataMock";
import resolvedComponent from "@/util/resolvedComponent";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe("Episode Component ", () => {
  it("renders correct text", async () => {
    // @ts-expect-error fetch-mock dosent overwrite the type def on fetch this is required since fetch dosent exist in node env
    fetch.mockResponse(JSON.stringify(EpisodeMock));

    const EpisodeResolved = await resolvedComponent(Episode, {
      url: "https://rickandmortyapi.com/api/episode/1",
    });

    render(<EpisodeResolved />);
    const name = screen.getByRole("heading", { level: 3 });

    expect(name.innerHTML).toEqual("S01E01 - Pilot - December 2, 2013");
  });
});
