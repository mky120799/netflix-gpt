import OpenAI from 'openai';
import { OPENAI_KEY3 } from './constants';

const openAi = new OpenAI({
  apiKey:OPENAI_KEY3,
  dangerouslyAllowBrowser: true
});

export default openAi;