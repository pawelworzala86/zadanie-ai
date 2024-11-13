import fetch  from 'node-fetch'
import fs from 'fs'

const API_KEY = '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';
const endpoint = 'https://api.openai.com/v1/chat/completions';

const artykul = fs.readFileSync('./artykul.txt').toString()

const data = {
  model: 'gpt-3.5-turbo',
  messages: [
    { role: 'system', content: `podany text przerób na artykuł z kodem html
kod html niech zaczyna się od tagu main jako głównego obiektu
podany text przerób na sekcje z tagiem p i wydziel nagłówki jako h2
sekcje niech mają zdjęcia default.jpg z opisem alt i niech są pod tytułem h2
użyj całego podanego tekstu do wyniku html` },
    { role: 'user', content: artykul }
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
    fs.writeFileSync('./result.html',data.choices[0].message.content)
  })
  .catch(error => {
    console.error('Error:', error);
  });

// access the underlying Response object
//console.log(response)