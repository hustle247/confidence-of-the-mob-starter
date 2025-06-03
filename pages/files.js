import { useEffect, useState } from 'react';

export default function Files() {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);

  const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQuvFA_m75ZvWdposlBc_tbqWbqPWVPihwQOLPyoQFYVLRVWaze4RYLecgUr667al7J6v_NR0VwLaWv/pub?output=csv';

  useEffect(() => {
    fetch(SHEET_CSV_URL)
      .then(res => res.text())
      .then(csv => {
        const lines = csv.split('\n').slice(1);
        const parsed = lines.map(line => {
          const fields = line.split(',').map(x => x.trim().replace(/^"|"$/g, ''));
          return {
            id: fields[0],
            fileName: fields[1],
            date: fields[2],
            type: fields[3],
            title: fields[4],
            entities: fields[5],
            location: fields[6],
            aiSummary: fields[7],
            tags: fields[8],
            episode: fields[9],
            notes: fields[10]
          };
        });
        setDocs(parsed);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-6 text-center">Loading documents…</p>;

  return (
    <main className="px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Fred’s Document Archive</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {docs.map(doc => (
          <li key={doc.id} className="p-4 border rounded shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-1">{doc.title || doc.fileName}</h2>
            <p className="text-sm text-gray-600">{doc.date} • {doc.type}</p>
            <p className="mt-2 text-gray-800">{doc.aiSummary || doc.title}</p>
            <p className="mt-2 text-sm text-gray-500"><strong>Tags:</strong> {doc.tags}</p>
            <p className="text-sm text-gray-500"><strong>Entities:</strong> {doc.entities}</p>
            <p className="text-sm text-gray-500"><strong>Location:</strong> {doc.location}</p>
            <a
              href={`https://drive.google.com/file/d/${doc.fileName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-blue-600 hover:underline"
            >
              View Document
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
