import Contact from "@/components/ContactUs/Contact";
import Heading from "@/components/ui/Heading/Heading";

export const metadata = {
  title: "Contact Tymor Technologies – IT Support & Free Consultation",
  description: "Contact Tymor Technologies for expert IT services. Call 24/7/365 at 1-888-858-9667 or request a free consultation. Offices in PA, FL, CA, TX, NY, GA, NC, IL, CO & Dubai.",
};

export default function page() {
    return (
        <div>
            <Heading heading={'CONTACT US'}></Heading>
            <Contact></Contact>
        </div>
    )
}
