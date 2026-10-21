import Head from 'next/head';
import Link from 'next/link';
import Seo from "../components/Seo";
import { PAGE_META } from "../lib/seo";
import PodcastHero from '../components/podcast/PodcastHero';
import EpisodePreview from '../components/podcast/EpisodePreview';
import { episodePreview } from '../content/podcastPreview';

const upcomingEpisodes = [
  {
    ep: "EPISODE 02",
    title: "The Eliot Ness of Boston",
    desc: "From wiretapping the North End to staging moving-van gambling raids out of Howard Johnson's parking lots, Fred Pastore builds the IRS Rackets Squad into the Mafia's worst nightmare.",
    exhibit: "Case File №58-012"
  },
  {
    ep: "EPISODE 03",
    title: "Boston Special Project Four",
    desc: "When Fred's investigation into industrialist Bernard Goldfine uncovers financial ties reaching the White House Chief of Staff, he refuses orders to stand down — and becomes a target himself.",
    exhibit: "Case File №59-041"
  },
  {
    ep: "EPISODE 04",
    title: "The Telegram to JFK",
    desc: "April 13, 1961: A career agent sends an urgent Western Union wire directly to President Kennedy and Attorney General Robert Kennedy. The reply from the West Wing changes everything.",
    exhibit: "Case File №61-030"
  },
  {
    ep: "EPISODE 05",
    title: "C + R = J (Crossing the Line)",
    desc: "Betrayed by the institution he served, the man who hunted the Patriarca crime family takes his unmatched knowledge of federal tax law to the other side of the table.",
    exhibit: "Case File №62-117"
  }
];

export default function Podcast() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-16 md:py-24 fade-in">
      <Seo meta={PAGE_META["/podcast"]} />
      
      <PodcastHero />
      
      <div className="max-w-3xl mx-auto my-10 text-center">
        <p className="text-text-dim text-lg md:text-xl leading-relaxed px-4">
          The <span className="text-text font-semibold italic">Confidence of The Mob</span> podcast is a deeply researched narrative documentary series. Unpacking decades of Fred Pastore&apos;s declassified IRS records, we bring the investigation to life through real audio tapes, insider interviews, and expert analysis of how the American Mafia infiltrated the government.
        </p>
      </div>
      
      <EpisodePreview previewData={episodePreview} />

      {/* Series Dossier / What's Coming Roadmap */}
      <section className="max-w-4xl mx-auto mt-20 pt-16 border-t border-rule">
        <p className="eyebrow">Series Dossier · What&apos;s Coming</p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 my-4 mb-8">
          <div>
            <h2 className="font-display font-black text-[clamp(1.6rem,3.2vw,2.3rem)] leading-[1.12] tracking-[-0.01em] text-text">
              The Crawlspace Media Investigation
            </h2>
            <p className="text-text-dim text-[1rem] mt-2 max-w-[38em]">
              Season 1 unpacks the complete arc of the declassified archive. Enter your email above to receive full episode drops as they are cleared for release.
            </p>
          </div>
          <span className="stamp text-[0.7rem] shrink-0 self-start sm:self-end">Season 01 · In Production</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {upcomingEpisodes.map((item) => (
            <article key={item.ep} className="folder flex flex-col justify-between" data-tab={`${item.ep} · ${item.exhibit}`}>
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-type text-[0.65rem] tracking-[0.14em] text-stamp border border-stamp px-2 py-0.5 rounded-[3px] uppercase">
                    CLASSIFIED · DROPPING SOON
                  </span>
                </div>
                <h3 className="font-display font-bold text-[1.18rem] leading-[1.25] mb-2 text-[#241d15]">
                  {item.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.55] text-[#4d4433]">
                  {item.desc}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#cfc3a8] flex items-center justify-between font-type text-[0.68rem] tracking-[0.12em] text-[#6b5f47] uppercase">
                <span>Crawlspace Media · Audio File</span>
                <a href="#podcast-email-gate" className="text-stamp hover:underline">
                  Get Notified →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Production Credits */}
      <div className="max-w-3xl mx-auto mt-20 text-center border-t border-rule pt-16">
        <p className="font-type text-text-dim text-xs uppercase tracking-[0.2em] mb-6">Production Credits</p>
        <div className="text-text-dim leading-relaxed text-sm sm:text-base space-y-2">
          <p><span className="text-text font-semibold italic">Confidence of The Mob</span> is created, hosted, and executive produced by <strong className="text-paper font-bold">Eddy Inserra</strong>.</p>
          <p>Produced by <strong className="text-paper font-bold">Bobby Pastore</strong>.</p>
          <p>Narrative production by <strong className="text-paper font-bold">Tim Pilleri</strong> and <strong className="text-paper font-bold">Lance Reenstierna</strong> of Crawlspace Media.</p>
          <p>Sound design by <strong className="text-paper font-bold">Brendan Brady</strong>.</p>
        </div>

        {/* Secondary CTA below Production Credits */}
        <div className="mt-12 pt-8 border-t border-rule/60">
          <Link href="/buy-book" className="inline-block font-display font-bold text-base sm:text-lg text-paper hover:text-stamp transition-colors">
            Can&apos;t wait for the full audio series? <span className="text-stamp underline underline-offset-4">Read the complete investigation in the book →</span>
          </Link>
        </div>
      </div>

    </div>
  );
}

