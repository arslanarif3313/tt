"use client";

export default function OurPromise() {
    const promises = [
        {
            title: "No-Fix, No-Fee Guarantee",
            text: "If we are unable to resolve your issue remotely, we will not charge you for the onsite visit. This guarantee is authorized only by Tymor Technologies and not at the discretion of the client.",
        },
        {
            title: "Transparent Communication",
            text: "Clear communication throughout the support process, ensuring you are always informed about the status and next steps.",
        },
    ];

    return (
        <section className="py-16 md:py-20 bg-black text-white">
            <div className="container mx-auto px-4 text-center">
                {/* Heading */}
                <h2 className="text-xl md:text-3xl font-bold uppercase">
                    Our Promise: If We Can’t Fix It Remotely, It’s Free
                </h2>

                {/* Cards */}
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {promises.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white text-black p-6 rounded-lg shadow-md"
                        >
                            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                            <p className="text-sm font-sans">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
