import intersectArrays from "@/util/intercectArrays";
import "@testing-library/jest-dom";

const MockArray = ["testing", "intercect", "of", "arrays", "strings"];
const MockArray2 = ["Testing", "intercect", "Of", "arrays", "strings"];

describe("intercectArrays", () => {
  it("gives correct response", () => {
    const response = intersectArrays(MockArray, MockArray2);

    expect(response).toHaveLength(3);
    expect(response).toStrictEqual(["intercect", "arrays", "strings"]);
  });
});
