import React from 'react';

function AnimatedTitle({ titleFirst, titleSecond }) {
  // Rozdělíme text na slova a animujeme písmena uvnitř každého slova
  const renderWordWithDelay = (word, delayStart) => {
    return word.split('').map((char, index) => (
      <span
        key={index}
        style={{ animationDelay: `${delayStart + index * 0.05}s` }} // dynamické zpoždění
        className="inline-block opacity-0 fade-in" // Použijeme inline-block pro animaci
      >
        {char === ' ' ? '\u00A0' : char} {/* Ponecháme mezeru jako non-breaking space */}
      </span>
    ));
  };

  const renderTextWithDelay = (text, delayStart) => {
    let totalChars = 0; // Počítáme celkový počet znaků

    return text.split(' ').map((word, wordIndex) => {
      const wordDelay = totalChars * 0.05; // Zpoždění na základě počtu již zpracovaných znaků

      totalChars += word.length; // Přidáme délku aktuálního slova do celkového počtu

      return (
        <span key={wordIndex} className="inline-block mr-4">
          {renderWordWithDelay(word, delayStart + wordDelay)} {/* Zpoždění pro každé slovo */}
        </span>
      );
    });
  };

  return (
    <div className='flex flex-col text-4xl sm:text-7xl uppercase tracking-wider font-bold'>
      {titleFirst !== '' && 
        <span className="opacity-80">
          {renderTextWithDelay(titleFirst, 0)} {/* První titulek, zpoždění od 0s */}
        </span>}

      {titleSecond !== '' &&
        <span className="font-black uppercase">
        {renderTextWithDelay(titleSecond, titleFirst.split('').length * 0.05)} {/* Druhý titulek, zpoždění po prvním */}
        </span>}
    </div>
  );
}

export default AnimatedTitle;
