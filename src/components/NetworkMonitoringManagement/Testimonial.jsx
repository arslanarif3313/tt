import Link from 'next/link'
import React from 'react'

export default function Testimonial() {
    return (
        <div>
            <section className="py-16">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="uppercase font-bold text-xl md:text-2xl mb-6">Client Testimonial</h3>
                    <div className="max-w-3xl mx-auto bg-white rounded-xl border border-gray-200 shadow-sm p-6 font-sans">
                        <p className="italic ">
                            “Partnering with Tymor Technologies ensured a seamless transition to our new office with enhanced
                            security and continuous support.”
                        </p>

                        <div className="avatar flex justify-center items-center gap-5">
                            <div className="w-16 rounded-full ">
                                <img src="/testimonial-avatar.jpg" alt="Craig Weis, IT Director at Tymor Technologies" />

                            </div>
                            <p className="text-sm "> — Michael Davis, IT Director, Apex Investments</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-16 bg-gray-600 text-center text-white">
                <div className="container mx-auto px-4">
                    <h2 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
                        Ready to Transform Your IT Infrastructure?
                    </h2>
                    <p className=" mx-auto mb-6 text-gray-300">
                        <Link className='text-primary' href={'/contact-us'}>Contact Tymor Technologies</Link> today to learn how our network monitoring and management services can benefit your business.
                    </p>

                </div>
            </section>
        </div>
    )
}
