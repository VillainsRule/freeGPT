import askGPT from '../dist/main';

const response = await askGPT({
    prompt: 'Add 2 to the previous result. Output only the response.',
    history: [
        { role: 'user', content: 'What is 2 + 2?' },
        { role: 'assistant', content: '2 + 2 is 4.' }
    ]
});

console.log('4 + 2 = ' + response);