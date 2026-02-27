import { CTASection } from "@/components/CTASection";
import { FAQCategories } from "@/components/FAQCategories";
import { FAQHero } from "@/components/FAQHero";
import { FAQSection } from "@/components/FAQSection";

export default function FAQPage() {
  return (
    <main className="pt-24">
      <FAQHero />
      <FAQCategories />
      <FAQSection />
      <CTASection />
    </main>
  );
}