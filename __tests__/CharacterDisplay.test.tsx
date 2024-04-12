import CharactersDisplay from "@/components/CharactersDisplay";
import { PageMock } from "@/mocks/DataMock";
import resolvedComponent from "@/util/resolvedComponent";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";

jest.mock("next/navigation", () => ({
  useSearchParams: () => null,
  usePathname: () => null,
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

fetchMock.enableMocks();
// @ts-expect-error fetch-mock dosent overwrite the type def on fetch this is required since fetch dosent exist in node env
fetch.mockResponse(JSON.stringify(PageMock));

describe("CaracterDisplay component", () => {
  it("renders correct title", async () => {
    const ResolvedDisplay = await resolvedComponent(CharactersDisplay, {
      page: "1",
      param: "char1page",
      character: "char1",
    });

    render(<ResolvedDisplay />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading.innerHTML).toEqual("Character #1");
  });
  describe("Navigation component", () => {
    it("renders nav component", async () => {
      const ResolvedDisplay = await resolvedComponent(CharactersDisplay, {
        page: "1",
        param: "char1page",
        character: "char1",
      });

      render(<ResolvedDisplay />);
      const heading = screen.getByRole("navigation");

      expect(heading).toBeInTheDocument();
    });
    it("first button should be disabled", async () => {
      const ResolvedDisplay = await resolvedComponent(CharactersDisplay, {
        page: "1",
        param: "char1page",
        character: "char1",
      });

      render(<ResolvedDisplay />);
      const heading = screen.getByRole("navigation");

      expect(heading.firstElementChild).toHaveAttribute("disabled");
    });
  });
  describe("renders Character List", () => {
    it("renders unordered list", async () => {
      const ResolvedDisplay = await resolvedComponent(CharactersDisplay, {
        page: "1",
        param: "char1page",
        character: "char1",
      });

      render(<ResolvedDisplay />);
      const list = screen.getByRole("list");

      expect(list).toBeInTheDocument();
      expect(list.childNodes.length).toBe(10);
    });
  });
  describe("renders CharacterCard", () => {
    it("renders article with correct class", async () => {
      const ResolvedDisplay = await resolvedComponent(CharactersDisplay, {
        page: "1",
        param: "char1page",
        character: "char1",
      });

      render(<ResolvedDisplay />);
      const card = screen.getAllByRole("article");

      expect(card[0]).toBeInTheDocument();
      expect(card[0]).toHaveClass("container false");
    });
  });
});
