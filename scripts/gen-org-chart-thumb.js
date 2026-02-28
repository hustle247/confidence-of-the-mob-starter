const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const driveId = '1b173AqtpGU7I2LtednhlnoROXw2Jr5Wz';
const outputThumb = path.join(process.cwd(), 'public/images/patriarca-org-chart-thumb.webp');
const tmpDir = path.join(process.cwd(), 'tmp_downloads');
const tempFile = path.join(tmpDir, 'org_chart_temp.pdf');

if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);

async function generate() {
    try {
        console.log('Downloading Org Chart...');
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveId}`;
        execSync(`curl -L "${downloadUrl}" -o "${tempFile}"`, { stdio: 'inherit' });

        console.log('Generating thumbnail...');
        const intermediatePng = path.join(tmpDir, 'org_chart_temp.png');

        // Step 1: Render PDF to PNG at 1200px width (larger for org chart detail)
        execSync(`sips -s format png --resampleWidth 1200 "${tempFile}" --out "${intermediatePng}"`, { stdio: 'inherit' });

        // Step 2: Convert PNG to WebP using Python/Pillow
        const pythonCmd = `python3 -c "from PIL import Image; Image.open('${intermediatePng}').save('${outputThumb}', 'WEBP', quality=85)"`;
        execSync(pythonCmd, { stdio: 'inherit' });

        if (fs.existsSync(intermediatePng)) fs.unlinkSync(intermediatePng);
        console.log('✅ Generated patriarca-org-chart-thumb.webp');
    } catch (err) {
        console.error('❌ Failed:', err.message);
    } finally {
        if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
        fs.rmdirSync(tmpDir, { recursive: true });
    }
}

generate();
