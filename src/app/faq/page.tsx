import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about materials, process, and ordering.",
};

const faqs = [
  {
    question: "How long does a typical countertop project take?",
    answer:
      "From template to install, most kitchen countertop projects take one to two weeks once cabinetry is set — templating happens after cabinets are installed, and fabrication takes a few business days.",
  },
  {
    question: "Do you offer samples before I commit to a material?",
    answer:
      "Yes. You can request a sample through the quote form or, if you're an architect, designer, or contractor, through our Trade Program sample service.",
  },
  {
    question: "What's the difference between marble, granite, quartz, and sintered stone?",
    answer:
      "Marble and granite are natural stone, each with unique veining and character. Quartz is engineered from natural quartz crystals for a highly consistent, low-maintenance surface. Sintered stone is manufactured under extreme heat and pressure for exceptional heat and scratch resistance. Visit the Materials pages for a full comparison.",
  },
  {
    question: "Do you work directly with architects and contractors?",
    answer:
      "Yes — our Trade Program is built specifically for architects, interior designers, and construction companies working on ongoing or large-scale projects.",
  },
  {
    question: "Do you handle installation, or just fabrication?",
    answer:
      "We handle both. Our own team fabricates and installs every project so quality is consistent from the workshop to your space.",
  },
];

export default function FAQPage() {
  return (
    <>
      <PageIntro eyebrow="Support" title="Frequently Asked Questions" />
      <section className="container-px mx-auto max-w-8xl pb-24 sm:pb-32">
        <div className="mx-auto max-w-3xl divide-y divide-hairline">
          {faqs.map((faq) => (
            <Reveal key={faq.question} className="py-8">
              <h2 className="font-display text-lg font-medium text-fg">
                {faq.question}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                {faq.answer}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
