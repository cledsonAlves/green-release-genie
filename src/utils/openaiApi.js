import axios from 'axios';

const OPENAI_API_KEY = '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'; // Substitua pela sua chave real da API OpenAI

export const generateReleaseNotes = async (input) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/text-davinci-002/completions',
      {
        prompt: `Gere notas de lançamento profissionais para as seguintes alterações: ${input}`,
        max_tokens: 150,
        n: 1,
        stop: null,
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw new Error('Falha ao gerar notas de lançamento');
  }
};