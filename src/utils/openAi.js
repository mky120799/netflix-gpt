import OpenAI from 'openai';
import { OPENAI_KEY4} from './constants';

const openAi = new OpenAI({
  apiKey:OPENAI_KEY4,
  dangerouslyAllowBrowser: true
});

export default openAi;