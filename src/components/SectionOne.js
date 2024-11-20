import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedTitle from './AnimatedTitle';

function SectionOne({ titleFirst, titleSecond, location }) {
    const navigate = useNavigate();
    const [currentTitleFirst, setCurrentTitleFirst] = useState(titleFirst);
    const [currentTitleSecond, setCurrentTitleSecond] = useState(titleSecond);

    // Aktualizace titulků při změně cesty
    useEffect(() => {
        setCurrentTitleFirst(titleFirst);
        setCurrentTitleSecond(titleSecond);
    }, [location.pathname, titleFirst, titleSecond]);

    const handleScrollToSlider = () => {
        navigate('/'); // Přesměruje na hlavní stránku

        // Po krátkém zpoždění (kvůli načtení stránky) posune k prvku
        setTimeout(() => {
            const sliderElement = document.getElementById('slider');
            if (sliderElement)
            {
                sliderElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // Zpoždění 100 ms by mělo být dostatečné
    };

    return (
        <section className='relative min-h-screen overflow-hidden bg-blue-500'>
            <div className='flex justify-center'>
                <div className='absolute'>
                    <img src='./images/logo_big.svg' alt='Occamy' />
                </div>
                <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-xxl mx-auto flex items-center w-10/12 z-20'>
                    <div className='text-white'>
                        <AnimatedTitle titleFirst={currentTitleFirst} titleSecond={currentTitleSecond} />
                        <div className='flex flex-col gap-4 mt-4 md:mt-8 lg:flex-row'>
                            <div>
                                <button
                                    onClick={handleScrollToSlider}
                                    className="whitespace-nowrap text-lg font-extrabold bg-transparent border-2 border-white text-white py-4 px-8 rounded-xl hover:bg-white hover:text-blue-500 transition"
                                >
                                    PROHLÉDNOUT SLUŽBY
                                </button>
                            </div>
                            <a href='/kontakt'>
                                <button className='whitespace-nowrap text-lg font-extrabold bg-white text-blue-500 py-4 px-8 rounded-xl hover:bg-white hover:text-blue-500'>
                                    DOMLUVIT KONZULTACI
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Waves Section */}
                
                <div className="waves">
                    <div className='wave wave1'></div>
                    <div className='wave wave2'></div>
                    <div className='wave wave3'></div>
                    <div className='wave wave4'></div>
                </div> 
            </div>
        </section>
    );
}

export default SectionOne;
