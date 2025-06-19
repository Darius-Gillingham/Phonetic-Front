// File: app/TranscriptionFeed.tsx
// Commit: add live WebSocket transcription feed component

'use client';

import { useEffect, useState } from 'react';

export default function TranscriptionFeed() {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const socket = new WebSocket('wss://phonetic-production.up.railway.app/client');

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'transcript' && typeof data.text === 'string') {
          setMessages((prev) => [...prev, data.text]);
        }
      } catch (err) {
        console.error('WebSocket message error:', err);
      }
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Live Transcript Feed</h2>
      <div className="bg-gray-100 p-3 rounded max-h-96 overflow-y-auto border">
        {messages.map((msg, idx) => (
          <p key={idx} className="mb-2 text-sm text-gray-800">
            {msg}
          </p>
        ))}
      </div>
    </div>
  );
}
