/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

//   import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,

//   } from "@google/generative-ai"
// const apiKey = "AIzaSyA7Zaz--5SJUyUUrH3lXFJ4r7pJrQmTx5A";
const apiKey = "AIzaSyAN_JEHqfUuhC3SjetH91GWLESvnlAfZ4w";
//   process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());
  // Correcting the return to use result instead of undefined 'response'
  return result.response.text();
}

export default run;
