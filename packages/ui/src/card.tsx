import { type JSX } from "react";

export function Card({
  title,
  children,
 
}: {
  title: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="border bg-white rounded-3xl p-6 ">
      <h1 className="py-1 text-xl border-b b-2">
        {title}
      </h1>
      {children}
    </div>
  );
}
