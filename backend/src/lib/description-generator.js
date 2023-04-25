//const dotenv = require('dotenv').config()
const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
  //apiKey: process.env.OPENAI_API_KEY,
  apiKey: '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',
})
const openai = new OpenAIApi(configuration)

module.exports = async function ({ name, location, date }) {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Create a ice breaker for a tandem event.
Title: ${user}
Date: ${date}
Description:`,
    temperature: 0.2,
    max_tokens: 1000,
  })
  console.log(response.data?.choices?.[0]?.text || '')
  return response.data?.choices?.[0]?.text || ''
}
