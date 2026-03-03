import Careers from "@/components/Careers/Careers";
import CareerHeading from "@/components/ui/Heading/CareerHeading";

export const metadata = {
  title: "Careers at Tymor Technologies – Join Our Team",
  description: "Join Tymor Technologies and work on cutting-edge technologies including AI, Cloud, AR, and digital platforms. Explore our current job openings and grow your career with innovation.",
};

export default function page() {
    return (
        <div>
            <CareerHeading></CareerHeading>
            <Careers></Careers>
        </div>
    )
}

