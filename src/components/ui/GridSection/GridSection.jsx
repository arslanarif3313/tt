

export default function GridSection({ title, subtitle, grid, }) {

    return (
        <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-black text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="uppercase font-bold text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 sm:mb-8 lg:mb-12 leading-tight">
                    {title}
                </h2>
                <h3 className='text-center text-base sm:text-lg lg:text-xl pb-4 sm:pb-5 lg:pb-6 text-gray-300'>{subtitle}</h3>
                <div className={`grid gap-4 sm:gap-6 lg:gap-8 ${
                    grid.length === 3 
                        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center' 
                        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                }`}>
                    {grid.map((card, idx) => (
                        <div
                            key={idx}
                            className="bg-white text-black rounded-lg shadow-lg hover:shadow-xl p-4 sm:p-6 lg:p-8 text-center transition-all duration-300 transform hover:scale-105"
                        >
                            <img
                                src={card.icon}
                                alt={card.title}
                                className="mx-auto w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-3 sm:mb-4 lg:mb-6 object-contain"
                            />
                            <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 leading-tight">{card.title}</h3>
                            <p className="text-xs sm:text-sm lg:text-base opacity-80 leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
