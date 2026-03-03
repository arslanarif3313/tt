
import ClientResponsibilities from '@/components/OnsiteItSupport/ClientResponsibilities'
import CommitmentToExcellence from '@/components/OnsiteItSupport/CommitmentToExcellence'
import OurPromise from '@/components/OnsiteItSupport/OurPromise'
import TechnologiesStrategies from '@/components/OnsiteItSupport/TechnologiesStrategies'
import Heading from '@/components/ui/Heading/Heading'
import Image from 'next/image'

export default function OnsiteItSupport() {



    return (
        <div className="bg-white">
            <Heading heading={'Onsite IT Support'}></Heading>
            {/* TECHNOLOGIES & STRATEGIES TITLE */}
            <TechnologiesStrategies></TechnologiesStrategies>
            {/* COMMITMENT TO EXCELLENCE*/}
            <CommitmentToExcellence></CommitmentToExcellence>
            {/* PROMISE STRIP */}
            <OurPromise></OurPromise>
            {/* CLIENT RESPONSIBILITIES */}
            <ClientResponsibilities></ClientResponsibilities>

        </div>
    )
}
