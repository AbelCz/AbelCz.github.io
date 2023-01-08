const chatGPT = require('./script.js');

const prompt1 = "generate me a random pet type";
const column1 = "title";
const response1 = chatGPT.sendPromptToChatGPT(prompt1, column1);

const prompt2 = "Generate me an SEO article title about it";
const column2 = "text";
const response2 = chatGPT.sendPromptToChatGPT(prompt2, column2);

const prompt3 = "generate me an seo optimized article for your article title";
const column3 = "text";
const response3 = chatGPT.sendPromptToChatGPT(prompt2, column2);

const prompt4 = "generate me a meta description ONLY and respond ONLY with the meta description.";
const column4 = "text";
const response4 = chatGPT.sendPromptToChatGPT(prompt2, column2);

const prompt5 = "generate me a meta tag ONLY and respond ONLY with the meta tag";
const column5 = "text";
const response5 = chatGPT.sendPromptToChatGPT(prompt2, column2);

// etc.
