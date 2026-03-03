

export default function Heading({ heading }) {

    return (
        <section className="hero bg-[url(/image/heading/heading.webp)] bg-no-repeat bg-cover bg-center min-h-[40vh] sm:min-h-[50vh] lg:min-h-[60vh]">

            {/* Overlay */}
            <div className="hero-overlay bg-black/50"></div>

            {/* Content */}
            <div className="hero-content text-white text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">

                <div className="mx-auto max-w-4xl">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase leading-tight mb-4 sm:mb-6">
                        {heading}
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-primary font-medium">
                        Unlocking Potential, Unleashing Innovation
                    </p>
                </div>
            </div>

        </section>

    )
}
