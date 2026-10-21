import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Seo from "../components/Seo";
import { PAGE_META } from "../lib/seo";

const SAMPLE_INTERROGATIONS = [
  {
    id: 'leave-irs-1959',
    question: 'Why did Fred leave the IRS in 1959?',
    answer: 'The paper trail points to April 1959 and "Boston Special Project Four" — the codename for Fred\'s investigation into industrialist Bernard Goldfine, whose financial favors reached White House Chief of Staff Sherman Adams. When Regional Commissioner Donald Bacon ordered Fred to turn over sensitive taxpayer records to external parties, Fred filed a formal written objection refusing to compromise the integrity of the investigation. The political pressure and institutional retaliation that followed from Washington ultimately forced him out of the service — and into private accounting for the very underworld figures he once pursued.',
    citations: [
      {
        label: 'Exhibit 031 · Boston Special Project Four (Goldfine Binder, 1959)',
        docId: '031_specialprojectfourbinder_1959-10-01',
        driveId: '1L_vON8q0JqlfyGpsTr2PdVHsFRphorGc'
      },
      {
        label: 'Exhibit 001 · Investigative Procedures in Net Worth Cases (1955)',
        docId: '001_suggestionstogoafterracketeers_1955-05-11',
        driveId: '1k3b0rRTqrBMrgzeEAykDfbP-g_o7QWGb'
      }
    ]
  },
  {
    id: 'jfk-telegram-1961',
    question: 'What was in the April 13, 1961 telegram to JFK?',
    answer: 'On April 13, 1961, Fred Pastore sent an urgent Western Union telegram directly to Attorney General Robert F. Kennedy at the Justice Department — copying President John F. Kennedy at the White House. In it, Fred requested an immediate, personal audience regarding critical new developments in the Bernard Goldfine tax fraud and political corruption case. Presidential Appointments Secretary Kenneth O\'Donnell acknowledged receipt from the West Wing, but the meeting was buried before Fred could testify to what he knew.',
    citations: [
      {
        label: 'Exhibit 030 · Western Union Telegram to JFK & RFK (April 13, 1961)',
        docId: '030_Telegramtofjkrfk_1961-04-13',
        driveId: '1zQJuzqUZA4MhTwwitqbptIFQOCrWdRRr'
      },
      {
        label: 'Exhibit 031 · Boston Special Project Four (Goldfine Binder)',
        docId: '031_specialprojectfourbinder_1959-10-01',
        driveId: '1L_vON8q0JqlfyGpsTr2PdVHsFRphorGc'
      }
    ]
  },
  {
    id: 'eliot-ness-boston',
    question: 'Why did they call him the Eliot Ness of Boston?',
    answer: 'As Group Supervisor and designated Racketeer Liaison Officer for the Boston IRS Intelligence Division, Fred Pastore pioneered military-style raids against New England\'s entrenched gambling syndicates. From dismantling the Raytheon plant betting ring featured in Confidential Magazine to staging multi-city moving-van raids out of Howard Johnson\'s parking lots and compiling the master dossier on Boston\'s top mobsters, his relentless pursuit of the Patriarca crime family earned him the press moniker "the Eliot Ness of Boston."',
    citations: [
      {
        label: 'Exhibit 034 · Howard Johnson\'s Gambling Raids Memo (Jan 27, 1961)',
        docId: '034_gambling_raid_howard_johnsons_1961-01-27',
        driveId: '1TvkoImloJKgpiR_Vqc1XK7Gou2AF5vk5'
      },
      {
        label: 'Exhibit 009 · Confidential Magazine: The Raytheon Raid (1958)',
        docId: '009_confidentialmagazineraytheonraid_1958-04-05',
        driveId: '1mfR4HtjH3_3OX09wbVFfBUL45LjsSrV_'
      },
      {
        label: 'Exhibit 025 · Evaluation of Boston Racketeers Dossier (1961)',
        docId: '025_evaluationofbostonracketeers_1961-03-10',
        driveId: '1JEKq8YHbQwCUXWYE0HgqnMMRlRx3lAWA'
      }
    ]
  }
];

export default function AskFred() {
  const [activeId, setActiveId] = useState(SAMPLE_INTERROGATIONS[0].id);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'I am the digital archive of Supervisory Agent Fred G. Pastore. I have indexed the declassified IRS case files, wiretap logs, and internal Treasury memos from "The Box." Select a sample interrogation below to inspect the evidence.',
      citations: []
    },
    {
      role: 'user',
      content: SAMPLE_INTERROGATIONS[0].question
    },
    {
      role: 'assistant',
      content: SAMPLE_INTERROGATIONS[0].answer,
      citations: SAMPLE_INTERROGATIONS[0].citations
    }
  ]);
  const messagesEndRef = useRef(null);

  const handleSelectQuestion = (item) => {
    setActiveId(item.id);
    setMessages([
      {
        role: 'assistant',
        content: 'I am the digital archive of Supervisory Agent Fred G. Pastore. I have indexed the declassified IRS case files, wiretap logs, and internal Treasury memos from "The Box." Select a sample interrogation below to inspect the evidence.',
        citations: []
      },
      {
        role: 'user',
        content: item.question
      },
      {
        role: 'assistant',
        content: item.answer,
        citations: item.citations
      }
    ]);
  };

  const scrollToSignup = () => {
    const footerEl = document.getElementById('footer-newsletter');
    if (footerEl) {
      footerEl.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const emailInput = footerEl.querySelector('input[type="email"]');
        if (emailInput) emailInput.focus();
      }, 500);
    }
  };

  return (
    <>
      <Seo meta={PAGE_META["/ask-fred"]} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-14 md:py-20">
        <div className="text-center mb-10">
          <span className="stamp mb-4 text-[0.8rem]">Digital Interrogation · Preview Mode</span>
          <h1 className="font-display font-black text-[clamp(2.1rem,4.5vw,3.3rem)] leading-[1.06] my-3 text-text">
            Ask Fred&apos;s Files
          </h1>
          <p className="text-text-dim max-w-xl mx-auto text-[1.02rem]">
            An AI archive trained directly on seventy-year-old IRS intelligence reports, wiretap logs, and correspondence from &ldquo;The Box.&rdquo;
          </p>
        </div>

        {/* Sample Interrogation Question Pills */}
        <div className="mb-6">
          <p className="font-type text-[0.72rem] tracking-[0.18em] text-paper-dim uppercase mb-3 text-center sm:text-left">
            // Select a Sample Interrogation to Inspect the Record:
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start" role="tablist" aria-label="Sample archive questions">
            {SAMPLE_INTERROGATIONS.map((item) => {
              const isSelected = activeId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectQuestion(item)}
                  aria-pressed={isSelected}
                  className={`font-type text-[0.76rem] tracking-[0.06em] text-left px-4 py-2.5 rounded-[4px] border transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-stamp border-stamp text-white shadow-[0_6px_20px_-6px_#c8372d99]'
                      : 'bg-ink-2 border-rule text-paper-dim hover:border-paper-dim hover:text-text'
                  }`}
                >
                  <span className="mr-1.5 opacity-80">›</span>
                  {item.question}
                </button>
              );
            })}
          </div>
        </div>

        {/* Terminal / Case File Interrogation Window */}
        <div className="bg-ink-2 rounded-[6px] border border-rule shadow-[0_25px_60px_-15px_#000e] overflow-hidden flex flex-col">
          {/* Terminal Top Bar */}
          <div className="bg-[#0d0b0a] px-5 py-3 border-b border-rule flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2.5 font-type text-[0.68rem] tracking-[0.18em] text-text-dim uppercase">
              <span className="inline-block w-2 h-2 rounded-full bg-stamp animate-pulse"></span>
              <span>ASK FRED TERMINAL · CONNECTED TO CASE ARCHIVE</span>
            </div>
            <span className="font-type text-[0.65rem] tracking-[0.14em] text-paper-dim uppercase">
              CLEARANCE: PRE-RELEASE SAMPLE
            </span>
          </div>

          {/* Messages Area */}
          <div className="p-6 sm:p-8 space-y-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[92%] sm:max-w-[85%] p-5 rounded-[4px] ${
                    msg.role === 'user'
                      ? 'bg-stamp text-white font-display font-bold text-[0.98rem] tracking-[0.01em]'
                      : 'bg-ink text-text font-type text-[0.86rem] leading-[1.75] border border-rule'
                  }`}
                >
                  {msg.role === 'assistant' && (
                    <div className="text-[0.68rem] tracking-[0.18em] text-stamp uppercase mb-2">
                      FRED&apos;S FILES › ARCHIVAL RESPONSE
                    </div>
                  )}
                  {msg.role === 'user' && (
                    <div className="text-[0.65rem] tracking-[0.18em] text-white/80 font-type uppercase mb-1 font-normal">
                      INTERROGATOR QUERY ›
                    </div>
                  )}
                  <p className="whitespace-pre-line">{msg.content}</p>

                  {msg.citations && msg.citations.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-rule/80">
                      <span className="block text-[0.68rem] tracking-[0.16em] text-paper-dim uppercase mb-2.5">
                        Verified Source Documents Cited:
                      </span>
                      <div className="flex flex-col sm:flex-row flex-wrap gap-2">
                        {msg.citations.map((cite) => (
                          <Link
                            key={cite.docId}
                            href={`/documents/${cite.docId}`}
                            className="inline-flex items-center gap-2 bg-ink-2 border border-rule hover:border-stamp text-paper px-3 py-1.5 rounded-[3px] text-[0.74rem] transition-colors"
                          >
                            <span className="text-stamp">■</span>
                            <span>{cite.label}</span>
                            <span className="text-stamp ml-1">→</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Focused Callout Replacing Static Coming Soon Dead-End */}
          <div className="p-6 sm:p-8 bg-[#0d0b0a] border-t border-rule">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="font-type text-[0.7rem] tracking-[0.18em] text-stamp uppercase block mb-1">
                  // TERMINAL STATUS: COMPILING FULL EVIDENCE INDEX //
                </span>
                <p className="font-display font-bold text-text text-base sm:text-lg leading-snug">
                  Full AI Archive Interrogation Launching Soon — Enter your email below to get early access credentials when the terminal goes live
                </p>
              </div>
              <button
                type="button"
                onClick={scrollToSignup}
                className="btn btn-primary shrink-0 w-full md:w-auto"
              >
                Get Early Access →
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

