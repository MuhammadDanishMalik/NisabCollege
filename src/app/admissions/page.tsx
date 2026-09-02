import type { Metadata } from "next";
import AdmissionsClient from "./AdmissionsClient";

export const metadata: Metadata = {
  title: "Admissions | Nisab College Wan Bhachran",
  description:
    "Review eligibility requirements and the 4-step admission process for all programmes at Nisab College Wan Bhachran.",
};

export default function AdmissionsPage() {
  return <AdmissionsClient />;
}
