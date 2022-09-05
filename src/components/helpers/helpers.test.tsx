import {findEmptyFields, isString} from "./helpers"
import {render, screen} from '@testing-library/react';
import {SimpleComponent} from '../SimpleComponentForTests/SimpleComponent';
import "@testing-library/jest-dom/extend-expect";


test('has correct welcome text', () => {
    render(<SimpleComponent />)
    expect(screen.getByRole('heading')).toHaveTextContent('I am a Simple Component!')
});

test('finds empty strings in touples and returns array of touple[0] for them', () => {
    expect(findEmptyFields([["1", ""], ["2", "aaa"], ["3", "bbb"], ["4", ""], ["5", "ccc"]])).toEqual(["1", "4"]);
});

test('takes array of touples and evaluates if the second value of a touple is a string', () => {
    expect(isString([["1", ""], ["2", "aaa"], ["3", "bbb"], ["4", ""], ["5", "ccc"]])).toBe(true);
});

xit("asdf", () => { expect("tre").not.toContain("tr")});

function newFunc(name?: string) {
    if(name) {
        return {
            name: name
        }
    }
    return {}
}

describe("newFunc", () => {
    it("newFuncObj", () => {
        expect(newFunc()).toEqual({})
    });
    it("newFuncSnap", () => {
        expect(newFunc("abc1")).toMatchSnapshot()
    });
    xit("newFuncXYZ", () => {
        expect(newFunc("xyz")).toEqual({name: "xyz"})
    });
    test.each(["abc", "xyz"])('test with %s entry',  (entry) => {
        expect(newFunc(entry)).toEqual({name: entry})
    });
});




