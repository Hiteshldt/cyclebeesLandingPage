import React, { useState } from 'react';

export interface FaqItem {
  question: string;
  /** Rendered answer. Use JSX for links rather than an HTML string. */
  answer: React.ReactNode;
  /**
   * Plain-text version of the same answer, used for FAQPage structured data.
   * Kept separate so the markup Google reads always matches the visible text.
   */
  plainAnswer: string;
}

/**
 * Shared FAQ accordion.
 *
 * Both the contact and services pages carried their own copy, and both stored
 * answers as HTML strings rendered inside `{faq.answer}` — so entries with a
 * link displayed the raw `<a href="…" className="…">` markup as visible text.
 * Answers are React nodes here, so links render as links.
 *
 * The panels are also properly collapsed now: the old version animated
 * `max-h-0` but left the content in the accessibility tree and keyboard tab
 * order while hidden.
 */
const FaqAccordion: React.FC<{ faqs: FaqItem[]; idPrefix?: string }> = ({
  faqs,
  idPrefix = 'faq',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `${idPrefix}-panel-${index}`;
        const buttonId = `${idPrefix}-button-${index}`;

        return (
          <div
            key={faq.question}
            className="bg-white border border-secondary-300/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-secondary-300/10 transition-colors duration-200"
              >
                <span className="text-base font-bold text-secondary-100">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 text-secondary-100 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-6 pb-6 border-t border-secondary-300/30 bg-gradient-to-br from-primary/5 to-secondary-100/5"
            >
              <div className="text-sm leading-relaxed text-secondary-600 pt-4">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
