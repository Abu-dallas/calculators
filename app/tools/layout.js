import "../globals.css";
import HeaderWrapper from "@/components/HeaderWrapper";

export const metadata = {
  title: "Smart Online Calculators & Tools (2025) | Free & Easy to Use",
  description:
    "Discover a wide range of free online calculators and smart tools to make everyday tasks easier. From GPA, finance, health, math, and conversion calculators — fast, accurate, and updated for 2025.",
  keywords: [
    "online calculators",
    "smart tools",
    "GPA calculator",
    "math calculator",
    "finance calculator",
    "health calculator",
    "conversion tools",
    "free calculators 2025",
  ],
  openGraph: {
    title: "Smart Online Calculators & Tools (2025)",
    description:
      "Access free smart calculators for school, finance, health, and daily tasks. Accurate, fast, and updated for 2025.",
    url: "calculators.name.ng",
    siteName: "Smart Tools",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://calculators.name.ng"),
  alternates: {
    canonical: "https://calculators.name.ng",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "BLOGGER GB (Garba Yakubu)" }],
  creator: "BLOGGER GB (Garba Yakubu)",
  publisher: "BLOGGER GB",
  category: "Online Calculators",
};

export default function ToolsLayout({ children }) {
  return (
    <div>
      <HeaderWrapper />
      {children}
    </div>
  );
}
