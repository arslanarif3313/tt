import Image from "next/image";
import { CircleCheck } from "lucide-react";

export default function WhyChooseTymor() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left image */}
                <div>
                    <Image
                        src="/about-us/Quality.webp" // <- replace with your actual image
                        alt="Why choose Tymor Technologies"
                        width={900}
                        height={650}
                        className="w-full h-auto rounded-lg shadow-lg"
                        priority
                    />
                </div>

                {/* Right content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
                        WHY CHOOSE TYMOR <br /> TECHNOLOGIES?
                    </h2>

                    <div className="space-y-6">
                        {/* Item */}
                        {[
                            {
                                title: "Expertise",
                                desc: "Our team of skilled professionals brings a wealth of experience and expertise across a wide range of technologies and industries."
                            },
                            {
                                title: "Innovation",
                                desc: "We are passionate about pushing the boundaries of what’s possible with technology, constantly seeking out new ideas and approaches to deliver innovative solutions that drive results."
                            },
                            {
                                title: "Customer Satisfaction",
                                desc: "We prioritize customer satisfaction above all else, going above and beyond to exceed our clients' expectations and deliver value that drives long-term success."
                            },
                            {
                                title: "Reliability",
                                desc: "With a proven track record of success and a commitment to excellence, you can trust Tymor Technologies to deliver solutions that meet your needs and exceed your expectations."
                            }
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CircleCheck className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-lg font-semibold">{item.title}</h4>
                                    <p className="opacity-80">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
