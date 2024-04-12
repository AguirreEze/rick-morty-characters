import PaginationButton from "@/components/PaginationButton";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

const mockRouterReplace = jest.fn(() => {});

jest.mock("next/navigation", () => ({
  useSearchParams: () => null,
  usePathname: () => null,
  useRouter() {
    return {
      replace: mockRouterReplace,
    };
  },
}));

describe("PaginationButton", () => {
  it("renders a button", () => {
    render(
      <PaginationButton page="url" param="char1page">
        {"<"}
      </PaginationButton>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  it("calls router on click", () => {
    render(
      <PaginationButton page="url" param="char1page">
        {"<"}
      </PaginationButton>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockRouterReplace.mock.calls).toHaveLength(1);
  });
});
