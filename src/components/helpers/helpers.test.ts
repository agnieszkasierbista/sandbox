import {findEmptyFields, isString} from "./helpers"

test('finds empty strings in touples and returns array of touple[0] for them', () => {
    expect(findEmptyFields([["1", ""], ["2", "aaa"], ["3", "bbb"], ["4", ""], ["5", "ccc"]])).toEqual(["1", "4"]);
});

test('takes array of touples and evaluates if the second value of a touple is a string', () => {
    expect(isString([["1", ""], ["2", "aaa"], ["3", "bbb"], ["4", ""], ["5", "ccc"]])).not.toBe(true);
});

test("asdf", () => { expect("tre").not.toContain("tr")});

function newFunc(name?: string) {
    if(name) {
        return {
            name: name
        }
    }
    return {}
}

describe("newFunc", () => {
    it("newFunc", () => {
        expect(newFunc()).toEqual({})
    });
    xit("newFunc", () => {
        expect(newFunc("abc")).toEqual({name: "abc"})
    });
    xit("newFunc", () => {
        expect(newFunc("xyz")).toEqual({name: "xyz"})
    });
    test.each(["abc", "xyz"])('test with %s entry',  (entry) => {
        expect(newFunc(entry)).toEqual({name: entry})
    });
});




