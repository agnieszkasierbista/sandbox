import {findEmptyFields, isString} from "./helpers"

test('finds empty strings in touples and returns array of touple[0] for them', () => {
  expect(findEmptyFields([["1", ""], ["2", "aaa"], ["3", "bbb"], ["4", ""], ["5", "ccc"] ])).toEqual(["1", "4"]);
});

test ('takes array of touples and evaluates if the second value of touple is a string', () => {
    expect(isString([["1", ""], ["2", "aaa"], ["3", "bbb"], ["4", ""], ["5", "ccc"] ])).toBe(true);
});

