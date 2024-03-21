import { polarityChecker } from '../src/client/js/polarityChecker';

describe('Testing the polarityChecker function', () => {
    test('It should return "positive" for a positive polarity score', () => {
        const polarity = 'positive';
        const result = polarityChecker(polarity);
        expect(result).toEqual('positive');
    });

    test('It should return "negative" for a negative polarity score', () => {
        const polarity = 'negative';
        const result = polarityChecker(polarity);
        expect(result).toEqual('negative');
    });

    test('It should return "neutral" for a neutral polarity score', () => {
        const polarity = 'neutral';
        const result = polarityChecker(polarity);
        expect(result).toEqual('neutral');
    });

    test('It should return "unknown" for an unknown polarity score', () => {
        const polarity = 'unknown';
        const result = polarityChecker(polarity);
        expect(result).toEqual('unknown');
    });
});