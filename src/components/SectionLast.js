import React from 'react';

function SectionLast(){
    return(
        <section className='relative overflow-hidden bg-blue-700'>
            <div className='flex justify-center relative py-32'>
                <div className='flex flex-col text-white items-center justify-center mb-12 md:mb-24 lg:mb-48 p-4 md:p-8 lg:p-16"'>
                    <p className='uppercase text-3xl md:text-4xl lg:text-5xl text-center font-black'>Spolu můžeme dosáhnout větších věcí!</p>
                    <p className='uppercase text-2xl md:text-3xl lg:text-4xl font-bold opacity-80 text-center mt-4 md:mt-6 lg:mt-8'>Stačí jeden klik a začneme tvořit společně.</p>
                    <a href='/Kontakt' className='mt-8 md:mt-12 lg:mt-16 space-x-4'>
                        <button className='whitespace-nowrap text-lg font-black bg-white text-blue-700 py-4 px-8 rounded-xl hover:bg-white'>
                            DOMLUVIT KONZULTACI
                            <span className="arrow translate-x-1">→</span>
                        </button>
                    </a>
                </div>
            </div>

            <div className='absolute bottom-0 left-0 w-full z-30'>
                <div className='last-wave'></div> {/* Přidejte sem vaši vlnu */}
            </div>
        </section>
    );
}

export default SectionLast;