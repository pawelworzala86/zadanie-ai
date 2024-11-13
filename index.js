import fetch  from 'node-fetch'

const API_KEY = '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';
const endpoint = 'https://api.openai.com/v1/chat/completions';

const data = {
  model: 'gpt-3.5-turbo',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'Napisz przykładowy kod w JavaScript, który zwraca "Hello, World!"' }
  ],
  max_tokens: 50
};

const options = {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
};

fetch(endpoint, options)
  .then(response => response.json())
  .then(data => {
    console.log('Response from OpenAI:', data);
    console.log('Response from OpenAI:', data.choices[0].message.content);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// access the underlying Response object
//console.log(response)