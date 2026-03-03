import { notFound } from 'next/navigation';
import { getJobBySlug, getAllJobSlugs } from '@/data/jobs';
import JobDetail from '@/components/Careers/JobDetail';

export async function generateStaticParams() {
    const slugs = getAllJobSlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const job = getJobBySlug(slug);
    
    if (!job) {
        return {
            title: 'Job Not Found'
        };
    }

    return {
        title: `${job.title} at Tymor Technologies – Apply Now`,
        description: `${job.summary} ${job.location} • ${job.jobType}`,
    };
}

export default async function JobPage({ params }) {
    const { slug } = await params;
    const job = getJobBySlug(slug);

    if (!job) {
        notFound();
    }

    return (
        <div>
            <JobDetail job={job} />
        </div>
    );
}

