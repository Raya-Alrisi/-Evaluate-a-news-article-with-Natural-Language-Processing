import { urlChecker } from '../src/client/js/urlChecker';

describe('Testing the urlChecker function', () => {
    test('It should return true for a valid url', () => {
        const url = 'https://example.com';
        const result = urlChecker(url);
        expect(result).toBeTruthy();
    });

    test('It should return false for an invalid url', () => {
        const url = 'invalid-url';
        const result = urlChecker(url);
        expect(result).toBeFalsy();
    });

    test('It should return false for an empty URL', () => {
        const url = '';
        const result = urlChecker(url);
        expect(result).toBeFalsy();
    });
});