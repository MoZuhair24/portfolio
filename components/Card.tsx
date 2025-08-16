import { ReactNode } from "react";

export default function Card({
  title,
  titleColor = "text-blue-400", // default
  children,
}: {
  title?: string;
  titleColor?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 shadow-md p-5 hover:shadow-lg transition">
      {title && (
        <h3 className={`text-lg font-semibold mb-3 ${titleColor}`}>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
