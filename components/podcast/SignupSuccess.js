export default function SignupSuccess({ successMessage }) {
  return (
    <div className="text-center py-10 px-6 rounded-xl border-2 border-stone-700/50 bg-stone-800/80 mt-8 backdrop-blur-sm max-w-md mx-auto fade-in shadow-file">
      <div className="text-5xl mb-6 text-accent-red font-bold font-mono-file">📋</div>
      <p className="text-white text-lg font-medium leading-relaxed">{successMessage}</p>
      <p className="text-stone-400 font-mono-file text-sm mt-4 tracking-widest uppercase">STATUS: VERIFIED</p>
    </div>
  );
}
