import BackupBenefits from '@/components/ManagedTotalBackupSolution/BackupBenefits'
import BackupSolution from '@/components/ManagedTotalBackupSolution/BackupSolution'
import SolutionResults from '@/components/ManagedTotalBackupSolution/SolutionResults'
import Testimonial from '@/components/ManagedTotalBackupSolution/Testimonial'
import GridSectionThree from '@/components/ui/GridSection/GridSectionThree'
import Heading from '@/components/ui/Heading/Heading'
import Image from 'next/image'

export const metadata = {
  title: "Managed Backup & Disaster Recovery Services – Tymor Technologies",
  description: "Secure cloud backup solutions with rapid recovery. Automated backups, ransomware protection, and 24/7 monitoring. Protect your business data from loss and disasters.",
};

export default function ManagedTotalBackupSolutionPage() {


    return (
        <div className="bg-white">
            <Heading heading={'Managed Total Backup Solution'}></Heading>
            {/* HERO */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow">
                            <Image src="/itServices/Data-Backup.webp" alt="Backup security dashboard" fill className="object-cover" priority />
                        </div>
                        <div>
                            <h1 className="uppercase font-bold leading-tight text-2xl sm:text-3xl md:text-4xl">
                                Professional Total<br />Backup Solutions
                            </h1>
                            <div className="mt-4 space-y-4 text-gray-700 leading-7">
                                <p>
                                    Operating without a dependable data backup system is a huge risk. In the event of data loss,
                                    ransomware, device failures, or human error—backups are what keep your data safe and your
                                    business operational.
                                </p>
                                <p>
                                    With Tymor Technologies’ total backup solution, you gain secure, automated protection, rapid
                                    recovery, and ongoing monitoring. Should data loss occur, rapid recovery is guaranteed,
                                    minimizing downtime.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THREE FEATURES */}
            <GridSectionThree

                grid={[
                    {
                        title: "Rapid Recovery",
                        desc: "Regardless of whether data loss is due to a security breach or human error, we ensure swift recovery, helping you resume operations promptly.",
                        icon: "assets/icons/tine.webp",
                    },
                    {
                        title: "Enhanced Protection",
                        desc: "Our backup services include enhanced security measures, ensuring data is available when needed and safeguarded against threats.",
                        icon: "assets/icons/compliant.webp",
                    },
                    {
                        title: "Maintained Privacy",
                        desc: "Sensitive data remains confidential during backup processes. Our services prioritize privacy, keeping your information secure.",
                        icon: "/assets/icons/reputation.webp",
                    }
                ]}
            ></GridSectionThree>

            {/* ADVANTAGES (image left, text right) */}
            <BackupBenefits></BackupBenefits>



            {/* HOW IT WORKS STRIP */}
            <section className="py-16 bg-black">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="uppercase font-bold text-white text-2xl sm:text-3xl md:text-4xl">
                        How Managed IT Total Backup Works
                    </h2>
                    <p className="mt-3 text-gray-300 max-w-3xl mx-auto">
                        We collaborate closely with you to understand your current posture, choose the right solution,
                        and define the backup policies and operational routines that protect your business.
                    </p>
                    <p className="mt-3 text-gray-300 max-w-3xl mx-auto">
                        Our onboarding process for new clients involves four phases, allowing us to gather essential information and prepare your business for optimal outcomes. Once complete, you can deploy our managed IT total backup services to safeguard your organization.
                    </p>
                </div>
            </section>

            {/* CASE STUDY (image + text) */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                        <div className="relative w-full h-72 md:h-80 rounded-2xl overflow-hidden shadow">
                            <Image src="/itServices/cloud-backup.webp" alt="Cloud backup case study" fill className="object-cover" />
                        </div>
                        <div>
                            <h3 className="uppercase font-bold text-xl md:text-2xl mb-2">
                                Managed Total Backup Service Case Study
                            </h3>
                            <div className="text-sm leading-6">
                                <p><b>Client:</b> Prestige Accounting Services</p>
                                <p><b>Industry:</b> Accounting</p>
                                <p><b>Location:</b> NY</p>
                                <p className='font-bold'>Challenge</p>
                                <p className="mt-3">
                                    Prestige Accounting Services, a well-established accounting firm, faced significant challenges with data security and management. The firm handled sensitive financial information for a diverse range of clients, including individuals, small businesses, and large corporations. They needed a robust backup solution to ensure data integrity, compliance with industry regulations, and quick recovery from any data loss incidents. Their existing backup system was outdated, prone to errors, and incapable of meeting the increasing demands of their growing client base.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SOLUTION and  RESULTS */}
            <SolutionResults></SolutionResults>

            {/* TESTIMONIAL */}
            <Testimonial></Testimonial>

            {/* FINAL CTA WITH IMAGE */}
            <BackupSolution></BackupSolution>

        </div>
    )
}
