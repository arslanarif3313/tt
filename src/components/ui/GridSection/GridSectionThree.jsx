import React from 'react'

export default function GridSectionThree({ title, subtitle, grid, }) {

    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-4 ">
                <h2 className="uppercase font-bold text-center text-2xl lg:text-4xl mb-12">
                    {title}
                </h2>
                <h3 className='text-center pb-5'>{subtitle}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {grid.map((card, idx) => (
                        <div
                            key={idx}
                            className="bg-white text-black rounded-lg shadow-lg p-6 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer"
                        >
                            <img
                                src={card.icon}
                                alt={card.title}

                                className="mx-auto w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-110"
                            />
                            <h3 className="font-semibold mb-2">{card.title}</h3>
                            <p className="text-sm opacity-80">{card.desc}</p>
                        </div>
                    ))}
                </div>



            </div>
        </section>
    )
}
