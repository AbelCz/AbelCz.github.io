const axios = require('axios');

async function sendPromptToChatGPT(prompt, column) {
  try {
    const response = await axios.post('https://api.openai.com/v1/chatbots/chatgpt/messages', {
      prompt: prompt
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      }
    });

    return response.data.messages[0].text;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  sendPromptToChatGPT
};
