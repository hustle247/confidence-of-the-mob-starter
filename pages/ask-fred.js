import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';

export default function AskFred() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'I am the digital archive of Agent Fred Pastore. I have access to the case files, wiretap logs, and internal memos. What do you want to know?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ask-fred', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.content }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: `[SYSTEM ERROR]: ${data.error || 'Connection failed.'}` }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: '[SYSTEM ERROR]: Unable to reach the secure server.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Ask Fred - Confidence of The Mob</title>
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 h-[calc(100vh-80px)] flex flex-col">
        <div className="text-center mb-8">
          <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest uppercase">DIGITAL INTERROGATION</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Ask Fred's Files</h1>
          <p className="text-gray-400 mt-2 text-sm">Powered by Google Gemini File Search</p>
        </div>

        {/* Chat Container */}
        <div className="flex-1 bg-gray-800 rounded-xl border-2 border-gray-700 shadow-file overflow-hidden flex flex-col">

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-lg ${msg.role === 'user'
                    ? 'bg-accent-red text-white rounded-br-none'
                    : 'bg-gray-700 text-gray-200 rounded-bl-none font-mono-file text-sm border border-gray-600'
                  }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-700 text-accent-red p-4 rounded-lg rounded-bl-none font-mono-file text-sm border border-gray-600 animate-pulse">
                  Processing query...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-gray-900 border-t border-gray-700">
            <form onSubmit={handleSubmit} className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question about the investigation..."
                className="flex-1 bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red font-mono-file text-sm"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-accent-red text-white px-6 py-3 rounded-lg font-bold hover:bg-red-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
