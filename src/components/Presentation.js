import React, {useEffect} from "react";

function Presentation() {
    useEffect(() => {
        // Vytvoření Intersection Observeru
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible'); // Přidá třídu 'visible' pokud je prvek viditelný
            }
          });
        }, { threshold: 0.1 }); // Nastavení, aby se spustilo, když je prvek 10% viditelný
    
        // Pozorování prvků s třídou .scroll-animation
        document.querySelectorAll('.scroll-animation').forEach(element => {
          observer.observe(element);
        });
    
        // Cleanup observeru při unmount komponenty
        return () => {
          observer.disconnect();
        };
      }, []); // Spustí se pouze při mountu komponenty
  


    return (
        <div>
            <section className="flex flex-col gap-4 py-16 min-w-full">
                <h2 className="text-center text-3xl">Možnost A</h2>
                <div className="flex flex-row gap-4 w-full h-64 PresentationFirst">
                    <div className="bg-red-500 w-full rounded-2xl"></div>
                    <div className="bg-blue-500 w-full rounded-2xl"></div>
                    <div className="bg-green-500 w-full rounded-2xl"></div>
                </div>

                <div className="flex flex-row gap-4 w-full h-64 PresentationSecond">
                    <div className="bg-purple-500 w-full rounded-2xl"></div>
                    <div className="bg-yellow-500 w-full rounded-2xl"></div>
                    <div className="bg-black w-full rounded-2xl"></div>
                </div>
            </section>

            <section className="flex flex-col gap-4 py-16 min-w-full">
                <h2 className="text-center text-3xl">Možnost B</h2>
                <div className="flex flex-row gap-4 w-full h-64 scroll-animation PresentationFirst2">
                    <div className="bg-red-500 w-full rounded-2xl"></div>
                    <div className="bg-blue-500 w-full rounded-2xl"></div>
                    <div className="bg-green-500 w-full rounded-2xl"></div>
                </div>

                <div className="flex flex-row gap-4 w-full h-64 scroll-animation PresentationSecond2">
                    <div className="bg-purple-500 w-full rounded-2xl"></div>
                    <div className="bg-yellow-500 w-full rounded-2xl"></div>
                    <div className="bg-black w-full rounded-2xl"></div>
                </div>
            </section>
        </div>
    );
}

export default Presentation;
