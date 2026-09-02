import type { Metadata } from "next";
import FaqsClient from "./FaqsClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Nisab College Wan Bhachran",
  description:
    "Find answers to frequently asked questions regarding admissions, eligibility, fees, scholarships, and campus facilities at Nisab College.",
};

export default function FaqsPage() {
  return <FaqsClient />;
}
