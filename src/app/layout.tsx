import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mann Mittal — DevOps Engineer",
  description:
    "DevOps engineer automating AWS and GCP infrastructure, Kubernetes, GitOps, and full-stack delivery with React and Next.js.",
  keywords: [
    "DevOps Engineer",
    "Kubernetes",
    "Terraform",
    "ArgoCD",
    "AWS",
    "GCP",
    "CI/CD",
    "Mann Mittal",
  ],
  authors: [{ name: "Mann Mittal" }],
  openGraph: {
    title: "Mann Mittal — DevOps Engineer",
    description:
      "Zero-downtime cloud platforms, GitOps, and full-stack delivery.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">{children}</body>
    </html>
  );
}
