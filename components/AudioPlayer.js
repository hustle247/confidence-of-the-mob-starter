export default function AudioPlayer({ src, title }) {
  return (
    <div className="my-8 p-6 bg-gray-800 rounded-xl border border-gray-700 max-w-2xl shadow-file">
      {title && (
        <h3 className="mb-4 text-lg font-semibold text-white font-mono-file">
          {title}
        </h3>
      )}
      <audio 
        controls 
        className="w-full"
        preload="metadata"
      >
        <source src={src} type="audio/mpeg" />
        <source src={src} type="audio/mp3" />
        <source src={src} type="audio/wav" />
        <source src={src} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
