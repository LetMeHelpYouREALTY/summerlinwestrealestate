"use client";

import useExpandable from "../../hooks/useExpandable";
import styles from "../../app/page.module.css";

type FaqAccordionItemProps = {
  faq: { q: string; a: string };
  index: number;
};

export default function FaqAccordionItem({ faq, index }: FaqAccordionItemProps) {
  const { isExpanded, ariaProps } = useExpandable(false);

  return (
    <div className={styles.faqItem}>
      <button
        {...ariaProps}
        aria-controls={`faq-panel-${index}`}
        className={styles.faqQuestion}
        type="button"
      >
        {faq.q}
      </button>
      <div
        id={`faq-panel-${index}`}
        hidden={!isExpanded}
        className={styles.faqAnswer}
      >
        {faq.a}
      </div>
    </div>
  );
}
