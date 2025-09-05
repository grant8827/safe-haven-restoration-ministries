'use client'
import React from 'react'

const Totop = () => {
    const [isVisible, setIsVisible] = React.useState(false);    
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    React.useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
        {isVisible &&
        <button onClick={scrollToTop} className="fixed bottom-5 right-5 text-white font-bold py-2 px-4 rounded-full">
          To Top
        </button>
        }
    </div>
  )
}

export default Totop
