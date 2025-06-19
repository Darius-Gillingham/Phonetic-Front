// File: app/page.tsx
// Commit: render transcription feed on homepage

import TranscriptionFeed from './TranscriptionFeed';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">📞 Gillingham TTS Live Transcript</h1>
      <TranscriptionFeed />
    </main>
  );
}
