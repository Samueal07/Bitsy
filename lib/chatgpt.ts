import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
// config onject for connection to openai api
const openai = new OpenAIApi(config);

export default openai;
