import { filterData, getMonthName, months } from "../editHoursSev";

describe("test the helper functions", () => {
  test("the properties should match", () => {
    expect(months).toContain("January");
    expect(months).toHaveLength(12);
  });
  test("should return the correct value for each condition", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    numbers.forEach((el) => {
      if (el === 1) {
        expect(getMonthName(numbers[0])).toMatch("January");
      }
      if (el === 2) {
        expect(getMonthName(numbers[1])).toMatch("February");
      }
      if (el === 3) {
        expect(getMonthName(numbers[2])).toMatch("March");
      }
      if (el === 4) {
        expect(getMonthName(numbers[3])).toMatch("April");
      }
      if (el === 5) {
        expect(getMonthName(numbers[4])).toMatch("May");
      }
      if (el === 6) {
        expect(getMonthName(numbers[5])).toMatch("June");
      }
      if (el === 7) {
        expect(getMonthName(numbers[6])).toMatch("July");
      }
      if (el === 8) {
        expect(getMonthName(numbers[7])).toMatch("August");
      }
      if (el === 9) {
        expect(getMonthName(numbers[8])).toMatch("September");
      }
      if (el === 10) {
        expect(getMonthName(numbers[9])).toMatch("October");
      }
      if (el === 11) {
        expect(getMonthName(numbers[10])).toMatch("November");
      }
      if (el === 12) {
        expect(getMonthName(numbers[11])).toMatch("December");
      }
      if (el === 13) {
        expect(getMonthName(numbers[12])).toMatch("Not Valid");
      }
    });
  });

  test("should return an array", async () => {
    const data = [
      { month_number: 1, name: "one" },
      { month_number: 2, name: "two" },
      { month_number: 3, name: "three" },
      { month_number: 4, name: "four" },
    ];
    expect.assertions(2);
    await expect(filterData(data, 1)).resolves.toStrictEqual([
      { month_number: 1, name: "one" },
    ]);
    await expect(filterData(data, 6)).resolves.toEqual([]);
  });
});
