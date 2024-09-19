import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { generateReleaseNotes } from '../utils/openaiApi';

const Index = () => {
  const [input, setInput] = useState('');
  const [releaseNotes, setReleaseNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const generatedNotes = await generateReleaseNotes(input);
      setReleaseNotes(generatedNotes);
    } catch (error) {
      console.error('Error generating release notes:', error);
      setReleaseNotes('Erro ao gerar as notas de lançamento. Por favor, tente novamente.');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-between p-4">
      <Card className="w-full max-w-2xl p-6 bg-white shadow-lg mt-8">
        <h1 className="text-3xl font-bold mb-6 text-green-700">Gerador de Notas de Lançamento Itaú</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite as alterações do lançamento"
            className="w-full p-2 border border-green-300 rounded"
          />
          <Button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            disabled={isLoading}
          >
            {isLoading ? 'Gerando...' : 'Gerar Notas de Lançamento'}
          </Button>
        </form>
        {releaseNotes && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-green-700">Notas de Lançamento:</h2>
            <Textarea
              value={releaseNotes}
              readOnly
              className="w-full p-2 border border-green-300 rounded h-48"
            />
          </div>
        )}
      </Card>
      <footer className="w-full text-center py-4 bg-green-600 text-white mt-8">
        <p>Sala de integração 2024</p>
      </footer>
    </div>
  );
};

export default Index;
