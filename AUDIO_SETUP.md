# Audio Files Setup Guide

## Directory Structure

Audio files for the book section should be placed in:
```
public/audio/book/
```

## How to Add Audio Files

1. **Place your audio files** in the `public/audio/book/` directory
   - Supported formats: MP3, WAV, OGG
   - Recommended format: MP3 (best browser compatibility)
   - **File naming**: Use the exact filename specified in `data/bookClips.json`
     - Example: `clip-1.mp3`, `clip-2.mp3`, etc.

2. **Update clip data** in `data/bookClips.json` if needed:
   - Each clip has: `id`, `clipNumber`, `page`, `person`, `topic`, and `audioFile`
   - The `audioFile` field should match your actual audio filename

## File Naming Convention

Audio files should be named according to the clip number:
- `clip-1.mp3` (for Clip #1)
- `clip-2.mp3` (for Clip #2)
- `clip-10.mp3` (for Clip #10)
- etc.

**Important**: The filename must match the `audioFile` field in `data/bookClips.json`

## URL Structure

- **Main book page**: `/book` - Lists all available audio clips
- **Individual clip pages**: `/book/clip/1`, `/book/clip/2`, etc.
  - Example: `/book/clip/1` displays Clip #1 with audio player and podcast upsell

Files in the `public/` directory are served from the root URL:
- File: `public/audio/book/clip-1.mp3`
- URL: `/audio/book/clip-1.mp3`

## How It Works

1. **Clip Data**: All clip information is stored in `data/bookClips.json`
   - Each clip has metadata: page number, person speaking, topic, and audio filename

2. **Dynamic Routing**: Individual clip pages are generated using Next.js dynamic routes
   - Route: `pages/book/clip/[id].js`
   - Access clips via: `/book/clip/1`, `/book/clip/2`, etc.

3. **Main Book Page**: `pages/book.js` displays a list of all clips
   - Users can click any clip to go to its dedicated page

4. **Clip Pages**: Each clip page includes:
   - Audio player with the clip
   - Clip metadata (page number, person, topic)
   - Podcast upsell section with links to full podcast and subscribe

## Adding New Clips

To add a new clip:

1. Add the audio file to `public/audio/book/` (e.g., `clip-11.mp3`)

2. Add the clip data to `data/bookClips.json`:
```json
{
  "id": 11,
  "clipNumber": 11,
  "page": 200,
  "person": "Person Name",
  "topic": "Topic description",
  "audioFile": "clip-11.mp3"
}
```

3. The clip will automatically appear on `/book` and be accessible at `/book/clip/11`

## Linking from the Book

When linking from your digital book, use URLs like:
- `https://yoursite.com/book/clip/1` (for Clip #1)
- `https://yoursite.com/book/clip/2` (for Clip #2)
- etc.

## Audio Player Component

The `AudioPlayer` component is located at `components/AudioPlayer.js` and provides:
- Standard HTML5 audio controls
- Multiple format support (MP3, WAV, OGG)
- Optional title display
- Responsive styling

## Current Clips

The following clips are configured:
- Clip #1 (Page 11): Main companion podcast intro - Various
- Clip #2 (Page 76): IRS Patriarca org chart origin - Jim Donahue
- Clip #3 (Page 117): Julio as confidential informant - Bobby Pastore
- Clip #4 (Page 131): Trust story - Henry Vara
- Clip #5 (Page 131): Referral from Henry & early Vegas business - Irwin Chafetz
- Clip #6 (Page 132): Partnership & early years - Frank DiMento
- Clip #7 (Page 138): C + R = J commentary compilation - Multiple
- Clip #8 (Page 163): Flemmi office encounter - Eddy Inserra
- Clip #9 (Page 178): Hawaiian jeweler recognizing Nina - Bobby Pastore
- Clip #10 (Page 165): Sharman's Doll life lesson story - Frank DiMento

