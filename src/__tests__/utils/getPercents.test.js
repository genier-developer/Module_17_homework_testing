import { getPercents } from "../../utils/getPercents";

describe("tests for getPercents function", () => {
  const correctPers = 10;
  const correctNum = 100;

    it("should operate correctly with correct, incorrect and invalid number", () => {
      expect(getPercents(correctPers, correctNum)).toBe(10);
    });
})
