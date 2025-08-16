// components/Badge.tsx
export default function Badge({ text }: { text: string }) {
  return (
    <span className="px-3 py-1 text-xs font-medium rounded-full bg-teal-700/20 text-teal-400 border border-teal-500/30">
      {text}
    </span>
  );
}
