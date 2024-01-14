import React, { useRef, useEffect } from 'react';

function OutsideClickHandler({ children, onOutsideClick }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    // add event listener to detect clicks outside of the element
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onOutsideClick();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // remove event listener when component unmounts
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onOutsideClick]);

  return <div className='w-fit' ref={wrapperRef}>{children}</div>;
}

export default OutsideClickHandler;
