export default function Home() {
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto text-center space-y-8">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        What if the Mob wasn’t your biggest threat—your own government was?
      </h1>
      <p className="text-lg md:text-xl text-gray-700">
        IRS Special Agent Fred G. Pastore was tasked with dismantling New England’s most powerful crime syndicates.<br />
        What he uncovered made him a target—by the mob <em>and</em> the White House.<br />
        Now, his grandson opens the case files for the first time.
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <a href="/podcast" className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
          🎧 Listen to the Podcast
        </a>
        <a href="/files" className="bg-gray-100 text-black px-6 py-3 rounded-full hover:bg-gray-200">
          📂 Browse the Case Files
        </a>
        <a href="/ask-fred" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
          🤖 Ask Fred’s Files (AI)
        </a>
      </div>

      <section className="text-left pt-12">
        <h2 className="text-2xl font-semibold mb-2">About This Project</h2>
        <p className="text-gray-800">
          <em>Confidence of the Mob</em> is a real-life investigative podcast, companion book, and interactive archive
          based on the never-before-seen files of Fred Pastore, the IRS’s top mob hunter in 1950s New England.
          <br /><br />
          Fred uncovered illicit gambling networks, corporate corruption at Raytheon, and a bribery chain that led
          straight to the White House—and he paid the price.
          <br /><br />
          These documents were locked away for decades. Until now.
        </p>
      </section>

      <section className="text-left pt-8">
        <h2 className="text-2xl font-semibold mb-2">What You Can Do on This Site:</h2>
        <ul className="list-disc list-inside text-gray-800">
          <li>🔍 <strong>Search</strong> hundreds of real government memos, wiretap logs, and internal raid plans</li>
          <li>🤖 <strong>Talk to the Archive</strong> with an AI assistant trained on Fred’s files</li>
          <li>📜 <strong>Explore the Mob Web</strong> – dynamic visual maps of who connected to who</li>
          <li>🕵️ <strong>Unlock Premium Access</strong> to behind-the-scenes audio, bonus episodes, and deep files</li>
        </ul>
      </section>

      <div className="pt-8 text-center">
        <h3 className="text-xl font-semibold">Join the Investigation.</h3>
        <p className="text-gray-700 mb-4">
          Your subscription helps fund the digitization of hundreds of documents and AI tools to keep Fred’s legacy—and the truth—alive.
        </p>
        <a href="/subscribe" className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700">
          Become an Insider
        </a>
      </div>
    </main>
  );
}
