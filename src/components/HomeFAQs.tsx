"use client";

import { useState } from "react";

const faqs = [
  {
    q: "When can you start full-time?",
    a: "I graduated in May 2026 and am actively looking for full-time opportunities. Available to start immediately.",
  },
  {
    q: "Where are you based?",
    a: "Austin, Texas — but open to relocation and remote opportunities across the US.",
  },
  {
    q: "What kind of roles are you looking for?",
    a: "Product Designer or UX Researcher roles, ideally at companies building complex B2B, enterprise, or AI-native products.",
  },
  {
    q: "What sets you apart as a designer?",
    a: "I’m at my best in ambiguous spaces. Strong research skills help me turn uncertainty into direction, and an experimental mindset helps me test, prototype, and refine ideas quickly. I can move from evidence to strategy to systems — and bring concepts to life in Cursor, not just Figma.",
  },
  {
    q: "Are you open to contract or freelance work?",
    a: "Yes — open to freelance and contract engagements alongside my full-time search.",
  },
  {
    q: "Tell me something unexpected about you.",
    a: "My first narrative sound design won at an international film festival — judged by an Academy Award winning sound designer. Turns out storytelling is just UX for emotions.",
  },
];

export function HomeFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <article className="faq-item" key={faq.q}>
            <button
              type="button"
              className="faq-question"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{faq.q}</span>
              <span className="faq-icon" aria-hidden>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`faq-answer-wrap${isOpen ? " is-open" : ""}`}
            >
              <p className="faq-answer">{faq.a}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
