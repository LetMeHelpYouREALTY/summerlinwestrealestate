export type SiteFaq = {
  question: string;
  answer: string;
};

/** General Summerlin West buyer / resident FAQs — no invented prices or stats. */
export const summerlinWestHomeFaqs: SiteFaq[] = [
  {
    question: "Which Summerlin West communities can I tour?",
    answer:
      "Villages across Summerlin West include The Vistas, Redpoint, Stonebridge, The Cliffs, and Reverence. Each offers different home styles, amenities, and access to trails and shopping.",
  },
  {
    question: "What should I know about home prices in Summerlin West?",
    answer:
      "Prices depend on village, floor plan, age, views, and condition. A local agent can compare recent sales and active listings for the neighborhoods you are considering.",
  },
  {
    question: "Are there new construction homes in Summerlin West?",
    answer:
      "New construction is available in several Summerlin West villages. Builder inventory and incentives change often — ask for current releases and tour options.",
  },
  {
    question: "How do I schedule a home tour in Summerlin West?",
    answer:
      "Use the contact form on this site or call (702) 550-0112 to request a private showing for any listed property you want to see.",
  },
  {
    question: "What makes Summerlin West distinctive?",
    answer:
      "Summerlin West is a master-planned area on Las Vegas’s west side with village parks, trail access toward Red Rock Canyon, and shopping and dining at Downtown Summerlin.",
  },
  {
    question: "How can I get a Summerlin West market update?",
    answer:
      "Request a market report through the form on this page or visit the Market Reports section for neighborhood-level trends and listing activity.",
  },
];

export function buildFaqPageJsonLd(faqs: SiteFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
