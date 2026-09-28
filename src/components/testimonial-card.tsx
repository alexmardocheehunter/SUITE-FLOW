import { Star } from "lucide-react";
import Reveal from "./Reveal";

type Props = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  delay?: number;
  accentColor?: string;
};

/** Témoignage client soigné sur fond clair. */
export default function TestimonialCard({
  quote,
  name,
  role,
  initials,
  delay = 0,
  accentColor = "#0052FF",
}: Props) {
  return (
    <Reveal delay={delay} className="h-full">
      <figure className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-md transition-all">
        <div>
          <div className="flex gap-1 text-amber-500" aria-label="5 étoiles sur 5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" aria-hidden />
            ))}
          </div>
          <blockquote className="mt-4 text-sm leading-relaxed text-[#334155] italic">
            « {quote} »
          </blockquote>
        </div>
        <figcaption className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
          <span
            className="grid size-10 place-items-center rounded-full text-xs font-black text-white shadow-sm shrink-0"
            style={{ backgroundColor: accentColor }}
            aria-hidden
          >
            {initials}
          </span>
          <div>
            <span className="block text-sm font-bold text-[#0A1440]">{name}</span>
            <span className="block text-xs text-[#64748B]">{role}</span>
          </div>
        </figcaption>
      </figure>
    </Reveal>
  );
}
