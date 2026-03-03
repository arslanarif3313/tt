import "./globals.css";
import Script from "next/script";
import Nav from "@/components/Navbar/Nav";
// import ModalNewsletter from "@/components/ModalNewsletter/ModalNewsletter";
import ScrollSlide from "@/components/ui/Animations/ScrollSlide";
import Footer from "@/components/Footer/Footer";
import ThreeCXChat from "@/components/ThreeCXChat/ThreeCXChat";
import { biome } from "./fonts";

/* ============================
   ✅ VIEWPORT SETTINGS
   ============================ */
export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* ============================
   ✅ METADATA
   ============================ */
export const metadata = {
  title: {
    default: "Tymor Technologies | Managed IT & Digital Solutions",
    template: "%s | Tymor Technologies",
  },
  description:
    "Tymor Technologies provides managed IT services, cloud solutions, cybersecurity, web development, and digital transformation for global businesses.",
  metadataBase: new URL("https://www.tymortech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tymor Technologies",
    description: "Managed IT, Cloud, Cybersecurity, Web & Digital Solutions",
    url: "https://www.tymortech.com/",
    siteName: "Tymor Technologies",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const GTM_ID = "GTM-T85R8F4N";

  return (
    <html
      lang="en"
      data-theme="light"
      className={`${biome.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* ✅ Google Tag Manager (Main Script) */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      </head>

      <body className="relative">
        {/* ✅ GTM NoScript (Must be first in body) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Nav />
        {/* <ModalNewsletter /> */}
        
        <ScrollSlide>{children}</ScrollSlide>
        
        <Footer />

        {/* 3CX Live Chat - Optimized (lazyOnload) */}
        <ThreeCXChat />

        {/* Semrush / Customers.ai - Optimized (lazyOnload) */}
        <Script
          src="https://mm-uxrv.com/js/semrush_25c89bec-1307-4c2d-9d17-25f2ebbf0138-64832247.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
