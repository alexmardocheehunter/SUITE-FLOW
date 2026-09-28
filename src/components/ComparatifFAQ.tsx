"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { COMPARATIF_FAQS } from "@/lib/comparatif-data";

export default function ComparatifFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-3.5">
      {COMPARATIF_FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        const headingId = `faq-heading-${idx}`;
        const panelId = `faq-panel-${idx}`;

        return (
          <div
            key={idx}
            className={`rounded-xl border transition-all duration-200 ${
              isOpen
                ? "border-blue-300 bg-white shadow-md shadow-slate-900/5"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <h3>
              <button
                type="button"
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
              >
                <span className="text-base sm:text-lg font-bold text-[#0A1440]">
                  {faq.question}
                </span>
                <span
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform duration-200 ${
                    isOpen ? "rotate-180 bg-blue-100 text-[#0052FF]" : ""
                  }`}
                  aria-hidden
                >
                  <ChevronDown className="size-4" />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              hidden={!isOpen}
              className={`px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed text-slate-600 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
