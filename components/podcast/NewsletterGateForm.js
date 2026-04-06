import { useState } from 'react';
import { trackEvent } from '../../lib/tracking';

export default function NewsletterGateForm({ episodeId, signupCTA, onSuccess }) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    trackEvent('podcast_newsletter_submit_started', { episode_id: episodeId, page: '/podcast', signup_context: 'audio_gate' });

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          firstName,
          metadata: {
            source_page: '/podcast',
            campaign: 'season_one_waitlist',
            episode_id: episodeId,
            signup_context: 'audio_gate'
          }
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to subscribe');
      }

      setStatus('success');
      trackEvent('podcast_newsletter_submit_success', { episode_id: episodeId, page: '/podcast', signup_context: 'audio_gate' });
      if (onSuccess) onSuccess();

    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
      trackEvent('podcast_newsletter_submit_failed', { episode_id: episodeId, page: '/podcast', signup_context: 'audio_gate', error: err.message });
    }
  };

  if (status === 'success') {
    return null; // Handled by parent
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 max-w-md mx-auto fade-in">
      <div>
        <label htmlFor="firstName" className="sr-only">First Name (optional)</label>
        <input 
          id="firstName"
          type="text" 
          placeholder="First Name (optional)" 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          disabled={status === 'submitting'}
          className="w-full bg-stone-900 border border-stone-700/50 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition duration-300 placeholder-stone-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">Email Address</label>
        <input 
          id="email"
          type="email" 
          required
          placeholder="Email Address" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'submitting'}
          className="w-full bg-stone-900 border border-stone-700/50 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition duration-300 placeholder-stone-500"
        />
      </div>
      
      {status === 'error' && (
        <p className="text-red-400 text-sm font-mono-file text-center mt-1">{errorMessage}</p>
      )}

      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full bg-accent-red text-white py-4 px-6 rounded-lg font-bold tracking-wider uppercase text-sm hover:bg-red-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-file mt-2"
      >
        {status === 'submitting' ? 'Submitting...' : signupCTA}
      </button>
      
      <p className="text-stone-500 text-xs text-center font-mono-file mt-4">
        We respect your privacy. No spam.
      </p>
    </form>
  );
}
