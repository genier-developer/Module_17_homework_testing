import { getMonth } from "../../utils/getMonth";
describe("test for getMonth function", () => {

    it("should operate correctly with numbers from 1 to 12", () => {
        expect(getMonth(1)).toBe('January');
        expect(getMonth(7)).toBe('July');
        expect(getMonth(11)).toBe('November');
      });
});
