import type { Metadata } from "next";
import ProgramsClient from "./ProgramsClient";

export const metadata: Metadata = {
  title: "Academic Programs | Nisab College",
  description:
    "Explore all 13 professional programmes at Nisab College Wan Bhachran — Medical, AD/BS, and Professional Degree tracks with full eligibility details.",
};

export default function ProgramsPage() {
  return <ProgramsClient />;
}
