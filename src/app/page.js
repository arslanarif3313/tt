import Home from "@/components/Home/Home";

export const metadata = {
  title: {
    // ✅ 'absolute' overrides the template in layout.js to prevent double branding
    absolute: "Tymor Technologies – IT Services, Cloud & Security Solutions",
  },
  description:
    "Leading IT services provider offering managed IT support, cloud solutions, cybersecurity, AI integration, VoIP, and digital marketing. 24/7/365 expert support for businesses nationwide.",
  
  // ✅ Sync OpenGraph so links shared on LinkedIn/WhatsApp match your SEO title
  openGraph: {
    title: "Tymor Technologies – IT Services, Cloud & Security Solutions",
    description:
      "Leading IT services provider offering managed IT support, cloud solutions, cybersecurity, AI integration, VoIP, and digital marketing.",
    url: "https://www.tymortech.com",
    siteName: "Tymor Technologies",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return (
    <main>
      <Home />
    </main>
  );
}
