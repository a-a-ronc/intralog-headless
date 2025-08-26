
import Link from "next/link";

type Item = { href: string; label: string; blurb?: string };

interface IndexListProps {
  title: string;
  items: Item[];
}

export default function IndexList({ title, items }: IndexListProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-[rgb(var(--fg))]">{title}</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-4 transition-all hover:ring-2 hover:ring-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-[rgb(var(--fg))]">{item.label}</div>
                {item.blurb && (
                  <div className="mt-1 text-sm text-[rgb(var(--muted-fg))]">{item.blurb}</div>
                )}
              </div>
              <svg className="h-5 w-5 text-[rgb(var(--muted-fg))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
