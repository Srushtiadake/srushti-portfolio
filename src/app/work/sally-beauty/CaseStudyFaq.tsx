"use client";

import { useState } from "react";
import styles from "./case-study.module.css";

type FaqItem = { q: string; a: string };

export function CaseStudyFaq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.faqList}>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q} className={styles.faqItem}>
            <button
              type="button"
              className={styles.faqTrigger}
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              <span className={styles.faqQ}>{item.q}</span>
              <span className={styles.faqIcon} aria-hidden>
                {open ? "−" : "+"}
              </span>
            </button>
            <div
              className={`${styles.faqPanelWrap} ${open ? styles.faqPanelWrapOpen : ""}`}
            >
              <div className={styles.faqPanelInner}>
                <p className={styles.faqA}>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
