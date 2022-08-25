import {findEmptyFields} from "./helpers"

test('finds empty strings in touples and returns array of touple[0] for them', () => {
  expect(findEmptyFields([["1", ""], ["2", "aaa"], ["3", "bbb"], ["4", ""], ["5", "ccc"] ])).toBe(["1", "4"]);
});