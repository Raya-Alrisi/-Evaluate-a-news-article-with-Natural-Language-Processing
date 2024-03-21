import { checkForName } from '../src/client/js/nameChecker';

describe('Testing the checkForName function', () => {
    test('It should return ture if the input text contains a name', () => {
        const inputText = "This is Raya Alrisi";
        expect(checkForName(inputText)).toBe(true);
    });
    test('It should return false if the input text does not contain a name', () => {
        const inputText = "This is not a name";
        expect(checkForName(inputText)).toBe(false);
    });
});