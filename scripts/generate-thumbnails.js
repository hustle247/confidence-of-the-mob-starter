const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const docs = JSON.parse(fs.readFileSync('data/documents.json', 'utf8'));
const tmpDir = path.join(process.cwd(), 'tmp_downloads');
const outputDir = path.join(process.cwd(), 'public/images/archive');

if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

async function processThumbnails() {
    for (const doc of docs) {
        if (doc.driveId === "YOUR_GOOGLE_DRIVE_FILE_ID_HERE") {
            console.log(`Skipping ${doc.id} - no drive ID available.`);
            continue;
        }

        const outputThumb = path.join(outputDir, `${doc.id}-thumb.webp`);
        if (fs.existsSync(outputThumb)) {
            console.log(`Thumbnail exists for ${doc.id}, skipping.`);
            continue;
        }

        console.log(`Processing ${doc.id}...`);
        const isJpeg = doc.id.includes('cover_page'); // Based on the jpeg name in drive
        const ext = isJpeg ? '.jpeg' : '.pdf';
        const tempFile = path.join(tmpDir, `${doc.id}${ext}`);

        try {
            const downloadUrl = `https://drive.google.com/uc?export=download&id=${doc.driveId}`;
            execSync(`curl -L "${downloadUrl}" -o "${tempFile}"`, { stdio: 'inherit' });

            try {
                const intermediatePng = path.join(tmpDir, `${doc.id}.png`);
                // Step 1: Render PDF to PNG at 800px width using sips
                execSync(`sips -s format png --resampleWidth 800 "${tempFile}" --out "${intermediatePng}"`, { stdio: 'inherit' });

                // Step 2: Convert PNG to WebP using Python/Pillow
                const pythonCmd = `python3 -c "from PIL import Image; Image.open('${intermediatePng}').save('${outputThumb}', 'WEBP', quality=80)"`;
                execSync(pythonCmd, { stdio: 'inherit' });

                if (fs.existsSync(intermediatePng)) fs.unlinkSync(intermediatePng);
                console.log(`✅ Generated ${doc.id}-thumb.webp`);
            } catch (err) {
                console.error(`❌ sips failed for ${doc.id}:`, sipsErr.message);
                // If sips fails, maybe it's not a real PDF (could be a drive error page)
                const head = execSync(`head -c 100 "${tempFile}"`).toString();
                console.log(`Start of file: ${head}`);
            }

        } catch (err) {
            console.error(`❌ Failed to process ${doc.id}:`, err.message);
        } finally {
            if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
        }
    }
}

processThumbnails().then(() => {
    fs.rmdirSync(tmpDir, { recursive: true });
    console.log('Thumbnail generation complete.');
});
