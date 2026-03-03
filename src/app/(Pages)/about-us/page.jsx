import AboutSection from '@/components/AboutUs/AboutSection'
import GetInTouch from '@/components/AboutUs/GetInTouch'
import MissionSection from '@/components/AboutUs/MissionSection'
import OurApproachSection from '@/components/AboutUs/OurApproachSection'
import WhyChooseSection from '@/components/AboutUs/WhyChooseSection'
import Heading from '@/components/ui/Heading/Heading'

export const metadata = {
  title: "About Tymor Technologies – IT Services & Solutions Provider",
  description: "Learn about Tymor Technologies - your trusted IT partner with offices in Pennsylvania, Florida, and Dubai. Delivering innovative technology solutions, managed IT services, and 24/7/365 support since our founding.",
};

export default function page() {
    return (
        <div>
            <Heading heading={'ABOUT US'}></Heading>
            <AboutSection></AboutSection>
            <MissionSection></MissionSection>
            <OurApproachSection></OurApproachSection>
            <WhyChooseSection></WhyChooseSection>
            <GetInTouch></GetInTouch>

        </div>
    )
}
