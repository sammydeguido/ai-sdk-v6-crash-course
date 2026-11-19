import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

const model = google('gemini-3.8-flash');

const prompt =
  'Give me the first paragraph of a story about an imaginary planet.';

const stream = streamText({ model, prompt });

for await (const chunk of stream.textStream) {
  process.stdout.write(chunk);
}
