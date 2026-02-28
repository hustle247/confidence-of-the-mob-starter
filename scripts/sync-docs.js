const fs = require('fs');
const https = require('https');

async function fetchCsv(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                return resolve(fetchCsv(res.headers.location));
            }
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function parseCsv() {
    const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQuvFA_m75ZvWdposlBc_tbqWbqPWVPihwQOLPyoQFYVLRVWaze4RYLecgUr667al7J6v_NR0VwLaWv/pub?output=csv';
    const csv = await fetchCsv(url);
    const lines = csv.split(/\r?\n/).filter(line => line.trim() !== '');
    const docs = lines.slice(1).map(line => {
        // Basic CSV parser (handles simple cases, might need refinement for quotes)
        const fields = [];
        let currentField = '';
        let inQuotes = false;
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (char === '"' && line[i + 1] === '"') {
                currentField += '"';
                i++;
            } else if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                fields.push(currentField);
                currentField = '';
            } else {
                currentField += char;
            }
        }
        fields.push(currentField);

        if (fields.length < 2) {
            console.log(`Skipping line due to low field count (${fields.length}): ${line}`);
            return null;
        }

        const rawId = fields[0]?.trim();
        const fileName = fields[1]?.trim();
        if (!fileName || !fileName.endsWith('.pdf')) {
            console.log(`Skipping line due to missing or invalid fileName: ${fileName}`);
            return null;
        }

        const id = fileName.replace('.pdf', '');
        const categoryMapping = {
            'Memo': 'Government Memos',
            'Training Doc': 'Intelligence',
            'Letter': 'Correspondence',
            'Photo': 'Evidence',
            'Accounting Doc': 'Evidence',
            'Raytheon Raid': 'Intelligence',
            'Investigation': 'Intelligence',
            'Racketeer List': 'Racketeer Evaluation',
            'Racketeers': 'Intelligence',
            'JFK / RFK Comms': 'High-Level Comms',
            'IRS Document': 'Evidence'
        };

        return {
            id: id,
            title: fields[4]?.trim().replace(/^"|"$/g, '') || fileName,
            description: fields[7]?.trim().replace(/^"|"$/g, '') || fields[4]?.trim().replace(/^"|"$/g, ''),
            thumbnail: `/images/archive/${id}-thumb.webp`,
            driveId: "YOUR_GOOGLE_DRIVE_FILE_ID_HERE",
            category: categoryMapping[fields[3]?.trim()] || fields[3]?.trim() || "Uncategorized"
        };
    }).filter(d => d !== null);

    if (!fs.existsSync('data')) fs.mkdirSync('data');
    fs.writeFileSync('data/documents.json', JSON.stringify(docs, null, 2));
    console.log(`Successfully wrote ${docs.length} documents to data/documents.json`);
}

parseCsv().catch(console.error);
