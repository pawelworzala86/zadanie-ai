import fetch  from 'node-fetch'
import fs from 'fs'

const config = JSON.parse(fs.readFileSync('./config.json').toString())

const API_KEY = config.API_KEY
const endpoint = 'https://api.openai.com/v1/chat/completions';

const artykul = fs.readFileSync('./artykul.txt').toString()
const query = fs.readFileSync('./query.txt').toString()

const data = {
  model: 'gpt-3.5-turbo',
  messages: [
    { role: 'system', content: query },
    { role: 'user', content: artykul }
  ],
  max_tokens: config.TOKENS
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
    fs.writeFileSync('./artykul.html',data.choices[0].message.content)
  })
  .catch(error => {
    console.error('Error:', error);
  });

// access the underlying Response object
//console.log(response)