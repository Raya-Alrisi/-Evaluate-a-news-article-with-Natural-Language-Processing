import { handleSubmit} from '../src/client/js/formHandler';

describe('Testing the handleSubmit function', () => {
    test('It should return correct data when provide with valid input', async () => {

        //mocking the event object
        const event = {
            preventDefault: jest.fn(),
            target:{
                elements: {
                    'article-url':{
                        value: 'https://example.com'
                    }
                }
            }
        };

        //mocking the fetch API
        globalThis.fetch = jest.fn(() => 
             Promise.resolve({
                json: () => Promise.resolve({
                    polarity: 'positive',
                    subjectivity: 'objective',
                    text: 'Example text'
                })
             })
        );

        //mocking the DOM element
        document.body.innerHTML = `
            <form id="article-form">
                <input id="article-url" value="https://example.com"
            </form>
            <div id="results"></div>
        `;

        await handleSubmit(event);

        expect(fetch).toHaveBeenCalledWith('http://localhost:3000/api', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({ url: 'https://example.com'}),
        });

        expect(document.getElementById('results').innerHTML).toContain('<p>Polarity: positive</p>');
        expect(document.getElementById('results').innerHTML).toContain('<p>Subjectivity: objective</p>');
        expect(document.getElementById('results').innerHTML).toContain('<p>Text: Example text</p>');
    });
});